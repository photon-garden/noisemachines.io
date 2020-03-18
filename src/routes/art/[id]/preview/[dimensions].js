import { createCanvas } from 'canvas'
import canvasSketch from 'canvas-sketch'
import artPieces from '../..'
import sharp from 'sharp'

const getPreview = async artworkId => {
  const { sketch, settings } = artPieces[artworkId]
  const canvas = createCanvas(1, 1)

  settings.canvas = canvas
  await canvasSketch(sketch, settings)

  return canvas
}

const artworkDoesntExist = artworkId => !artPieces[artworkId]
const getDimensions = string => {
  const [width, height] = string.split('x')
  return {
    width: JSON.parse(width),
    height: JSON.parse(height)
  }
}

export async function get (req, res, next) {
  res.setHeader('Content-Type', 'image/png')
  const artworkId = req.params.id
  const dimensions = getDimensions(req.params.dimensions)

  if (artworkDoesntExist(artworkId)) {
    res.statusCode = 404
    res.end()
    return
  }

  const canvas = await getPreview(artworkId)
  const imageStream = canvas.createJPEGStream({ quality: 0.3 })
  const resizer = sharp()
    .resize(300)
    .jpeg()
  imageStream.pipe(resizer).pipe(res)
}
