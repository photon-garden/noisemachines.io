import { createCanvas } from 'canvas'
import canvasSketch from 'canvas-sketch'
import sharp from 'sharp'
import fs from 'fs'
import pathFromPackage from '../src/routes/art/_helpers/pathFromPackage.js'
import artPiecesById from '../src/routes/art/index.js'

const getPreview = async artPiece => {
  const module = await artPiece.modulePromise
  const { sketch, settings } = module
  const canvas = createCanvas(1, 1)
  if (!canvas.style) {
    canvas.style = {}
  }

  settings.canvas = canvas
  await canvasSketch(sketch, settings)

  return canvas
}

const getPreviewImageStream = async artPiece => {
  console.log(`👩🏻‍🎨 Generating preview for ${artPiece.id}.`)

  const canvas = await getPreview(artPiece)
  const imageStream = canvas.createJPEGStream({ quality: 0.3 })
  const resizer = sharp()
    .resize(300)
    .jpeg()

  return imageStream.pipe(resizer)
}

const savePreviewImageStream = (artPiece, previewImageStream) => {
  return new Promise(resolve => {
    console.log(`🖼 Saving preview for ${artPiece.id}.`)

    const previewImagePath = pathFromPackage(
      'static',
      'art',
      'previews',
      artPiece.id
    )
    const writeStream = fs.createWriteStream(previewImagePath)
    const stream = previewImageStream.pipe(writeStream)
    stream.on('end', resolve)
  })
}

const getArtPieces = () =>
  Object.entries(artPiecesById).map((key, value) => {
    return {
      id: key,
      modulePromise: value.modulePromise
    }
  })

const savePreviewImage = async artPiece => {
  const previewImageStream = await getPreviewImageStream(artPiece)
  await savePreviewImageStream(artPiece, previewImageStream)
}

const main = async () => {
  for (const artPiece in getArtPieces()) {
    console.log('About to process art piece:')
    console.log(artPiece)
    await savePreviewImage(artPiece)
  }
}

main()
