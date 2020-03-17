import path from 'path'
import { promises as fs } from 'fs'
import pkgDir from 'pkg-dir'
import { getMetadataForFileName } from './[id].json'

const getArtDirectory = async () => {
  const root = await pkgDir(__dirname)
  return path.join(root, 'src', 'routes', 'art')
}

const blackList = ['index.svelte']

export async function get (req, res, next) {
  const artDirectory = await getArtDirectory()
  const fileNames = await fs.readdir(artDirectory)
  const artworks = fileNames
    .filter(fileName => !blackList.includes(fileName))
    .filter(fileName => fileName.includes('.svelte'))
    .filter(fileName => fileName[0] !== '_')
    .map(getMetadataForFileName)

  return res.end(JSON.stringify(artworks))
}
