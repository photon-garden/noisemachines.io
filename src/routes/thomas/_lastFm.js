import axios from 'axios'
import mapValues from 'lodash/mapValues'
import queryString from 'query-string'
import { DateTime } from 'luxon'
import tryParseInt from './_tryParseInt'

const toSecondsSinceEpoch = dateTime => {
  if (!dateTime) return null
  return Math.round(dateTime.toMillis() / 1000)
}

const toQuery = offset => '?' + queryString.stringify({ offset })
const toListen = track => {
  let listenedAt
  if (track.date) {
    const secondsSinceEpoch = tryParseInt(track.date.uts)
    listenedAt = fromSecondsSinceEpoch(secondsSinceEpoch)
  } else {
    listenedAt = DateTime.local()
  }
  return {
    track: {
      name: track.name,
      musicBrainzId: track.mbid
    },
    album: {
      name: track.album['#text'],
      musicBrainzId: track.album.mbid
    },
    artist: {
      name: track.artist['#text'],
      musicBrainzId: track.artist.mbid
    },
    listenedAt: listenedAt.toJSON()
  }
}

const toContents = (options, lastFmResponse) =>
  lastFmResponse.track.map(toListen)

const fromSecondsSinceEpoch = secondsSinceEpoch =>
  DateTime.fromMillis(secondsSinceEpoch * 1000)

const getLastFmOptions = options => ({
  api_key: process.env.LAST_FM_API_KEY,
  method: 'user.getrecenttracks',
  user: 'noise_machines',
  format: 'json',
  limit: options.limit,
  // the Last.fm page parameter is 1-indexed, but our offset
  // parameter is 0-indexed since JS collections are virtually
  // all 0-indexed.
  page: options.offset + 1,
  from: toSecondsSinceEpoch(options.from),
  to: toSecondsSinceEpoch(options.to)
})

const toMetadata = (options, lastFmResponse) => {
  const pageOf = options.hostAndProtocol + '/thomas/listens.json'
  const { offset, limit } = options
  const lastFmOptions = getLastFmOptions(options)
  let lastFmMetadata = lastFmResponse['@attr']
  lastFmMetadata = mapValues(lastFmMetadata, tryParseInt)

  const metadata = {
    self: pageOf + toQuery(offset, limit),
    kind: 'page',
    pageOf,
    first: pageOf + toQuery(0, limit),
    last: pageOf + toQuery(lastFmMetadata.totalPages - 1, limit),
    total: lastFmMetadata.total
  }

  if (lastFmOptions.page < lastFmMetadata.totalPages) {
    metadata.next = pageOf + toQuery(offset + 1, limit)
  }

  if (offset > 0) {
    metadata.previous = pageOf + toQuery(offset - 1, limit)
  }

  return metadata
}

const toResponse = (options, lastFmResponse) => {
  const response = {
    ...toMetadata(options, lastFmResponse),
    contents: toContents(options, lastFmResponse)
  }

  if (options['include-last-fm-response']) {
    response.lastFmResponse = lastFmResponse
  }

  return response
}

export const getUserListens = async options => {
  const lastFmOptions = getLastFmOptions(options)
  const endpoint =
    'http://ws.audioscrobbler.com/2.0/?' + queryString.stringify(lastFmOptions)
  const result = await axios.get(endpoint)
  const lastFmResponse = result.data.recenttracks
  const response = toResponse(options, lastFmResponse)
  return response
}
