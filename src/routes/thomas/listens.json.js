import '../../env'
import mapValues from 'lodash/mapValues'
import stringify from 'json-stringify-safe'
import { DateTime } from 'luxon'
import urlParser from 'url'
import getHostAndProtocol from './_getHostAndProtocol'
import tryParseInt from './_tryParseInt'
import * as lastFm from './_lastFm'

const defaultOptions = {
  offset: 0,
  limit: 200,
  from: null,
  to: null
}

const parseOptions = req => {
  const url = urlParser.parse(req.url, true)
  let options = mapValues(url.query, tryParseInt)
  options = Object.assign(defaultOptions, options)
  if (options.from) options.from = DateTime.fromMillis(options.from)
  if (options.to) options.to = DateTime.fromMillis(options.to)

  options.hostAndProtocol = getHostAndProtocol(req)

  return options
}

const setHeaders = res => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
}

export async function get (req, res, next) {
  if (!process.env.LAST_FM_API_KEY) {
    res.statusCode = 500
    res.end('LAST_FM_API_KEY environment variable not set.')
    return
  }

  const options = parseOptions(req)
  setHeaders(res)
  const response = await lastFm.getUserListens(options)

  res.end(stringify(response))
}
