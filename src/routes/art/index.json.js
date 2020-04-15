import fs from 'fs'
import { getMetadataForPath } from './[id].json'
import sortBy from 'lodash.sortby'
import pathFromPackage from './_helpers/pathFromPackage'
import artworks from './index.js'

const getMetadata = artwork => {
  const path = artwork.path
  const absolutePath = pathFromPackage('src', 'routes', 'art', path)
  const createdAt = fs.statSync(absolutePath).birthtimeMs
  return {
    createdAt,
    ...getMetadataForPath(path)
  }
}

const artworksWithMetadata = Object.values(artworks).map(getMetadata)
const newestArtworksFirst = sortBy(artworksWithMetadata, 'createdAt').reverse()

export async function get (req, res, next) {
  return res.end(JSON.stringify(newestArtworksFirst))
}
