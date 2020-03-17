import { createCanvas } from 'canvas'
import canvasSketch from 'canvas-sketch'
import artPieces from '../'
import sharp from 'sharp'

const getPreview = async artworkId => {
  const { sketch, settings } = artPieces[artworkId]
  const canvas = createCanvas(1, 1)

  settings.canvas = canvas
  await canvasSketch(sketch, settings)

  return canvas
}

const artworkDoesntExist = artworkId => !artPieces[artworkId]

export async function get (req, res, next) {
  res.setHeader('Content-Type', 'image/png')
  const artworkId = req.params.id

  if (artworkDoesntExist(artworkId)) {
    res.statusCode = 404
    res.end()
    return
  }

  const canvas = await getPreview(artworkId)
  const imageStream = canvas.createPNGStream({ compressionLevel: 9 })
  const resizer = sharp()
    .resize(300)
    .png()
  imageStream.pipe(resizer).pipe(res)
}
