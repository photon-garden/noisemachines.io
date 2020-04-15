import { createCanvas } from 'canvas'
import canvasSketch from 'canvas-sketch'
import sharp from 'sharp'
import fs from 'fs'
import pathFromPackage from '../../_helpers/pathFromPackage.js'
import artPieces from '../../index.js'

const getPath = artworkId =>
  pathFromPackage('src', 'routes', 'art', artworkId) + '.svelte'

const getIndexPath = artworkId =>
  pathFromPackage('src', 'routes', 'art', artworkId, 'index') + '.svelte'

const getPreview = async artworkId => {
  const module = await artPieces[artworkId].module
  const { sketch, settings } = module
  const canvas = createCanvas(1, 1)
  if (!canvas.style) {
    canvas.style = {}
  }

  settings.canvas = canvas
  await canvasSketch(sketch, settings)

  return canvas
}

const artworkExists = artworkId => {
  const artworkPath = getPath(artworkId)
  const indexPath = getIndexPath(artworkId)
  return fs.existsSync(artworkPath) || fs.existsSync(indexPath)
}

const getDimensions = string => {
  const [width, height] = string.split('x')
  return {
    width: JSON.parse(width),
    height: JSON.parse(height)
  }
}

export async function get (request, response, next) {
  const artworkId = request.params.id

  if (!artworkExists(artworkId)) {
    response.statusCode = 404
    response.end()
    return
  }

  response.setHeader('Content-Type', 'image/png')

  const dimensions = getDimensions(request.params.dimensions)
  const canvas = await getPreview(artworkId)
  const imageStream = canvas.createJPEGStream({ quality: 0.3 })
  const resizer = sharp()
    .resize(300)
    .jpeg()

  imageStream.pipe(resizer).pipe(response)
}
