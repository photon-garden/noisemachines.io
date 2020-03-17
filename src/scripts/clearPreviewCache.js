import { createCanvas } from 'canvas'
import canvasSketch from 'canvas-sketch'
import sharp from 'sharp'
import artworkMetadataList from '../routes/art/_artworkMetadataList.js'
import artworks from '../routes/art/index.js'

const getPreview = async artworkId => {
  const { sketch, settings } = artworks[artworkId]
  const canvas = createCanvas(1, 1)

  settings.canvas = canvas
  await canvasSketch(sketch, settings)

  return canvas
}

const generatePreview = async artworkId => {
  const canvas = await getPreview(artworkId)
  const imageBuffer = canvas.toBuffer()
  const resized = sharp(imageBuffer).resize(300)
  await resized.toFile(`../routes/art/preview/${artworkId}.png`)
}

const main = async () => {
  for (const artworkMetadata of artworkMetadataList) {
    await generatePreview(artworkMetadata.id)
  }
  process.exit()
}

main()
