import path from 'path'
import fs from 'fs'
import pkgDir from 'pkg-dir'
import { getMetadataForFileName } from './[id].json.js'

const getArtDirectory = () => {
  const root = pkgDir.sync(__dirname)
  return path.join(root, 'src', 'routes', 'art')
}

const blackList = ['index.svelte']

const artDirectory = getArtDirectory()
const fileNames = fs.readdirSync(artDirectory)
const artworkMetadata = fileNames
  .filter(fileName => !blackList.includes(fileName))
  .filter(fileName => fileName.includes('.svelte'))
  .filter(fileName => fileName[0] !== '_')
  .map(getMetadataForFileName)

export default artworkMetadata
