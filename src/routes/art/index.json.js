import path from 'path'
import fs from 'fs'
import pkgDir from 'pkg-dir'
import { getMetadataForFileName } from './[id].json'
import sortBy from 'lodash.sortby'

const blackList = ['index.svelte']

const getMetadata = fileName => {
  const filePath = path.join(artDirectory, fileName)
  const createdAt = fs.statSync(filePath).birthtimeMs
  return {
    createdAt,
    ...getMetadataForFileName(fileName)
  }
}

const root = pkgDir.sync(__dirname)
const artDirectory = path.join(root, 'src', 'routes', 'art')
const fileNames = fs.readdirSync(artDirectory)

const files = fileNames
  .filter(fileName => !blackList.includes(fileName))
  .filter(fileName => fileName.includes('.svelte'))
  .filter(fileName => fileName[0] !== '_')
  .map(getMetadata)

const newestArtworksFirst = sortBy(files, 'createdAt').reverse()

export async function get (req, res, next) {
  return res.end(JSON.stringify(newestArtworksFirst))
}
