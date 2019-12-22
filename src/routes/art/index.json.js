import path from 'path'
import { promises as fs } from 'fs'
import pkgDir from 'pkg-dir'

const capitalize = string => string[0].toUpperCase() + string.slice(1)

const getArtDirectory = async () => {
  const root = await pkgDir(__dirname)
  return path.join(root, 'src', 'routes', 'art')
}

const toArtMetadata = fileName => {
  const withoutExtension = fileName.replace('.svelte', '')
  const name = withoutExtension
    .split('-')
    .map(capitalize)
    .join(' ')
  return {
    name,
    url: `/art/${withoutExtension}`
  }
}

export async function get (req, res, next) {
  const blackList = ['index.json.js', 'index.svelte', '_helpers']
  const artDirectory = await getArtDirectory()
  const fileNames = await fs.readdir(artDirectory)
  const art = fileNames
    .filter(file => !blackList.includes(file))
    .map(toArtMetadata)
  return res.end(JSON.stringify(art))
}
