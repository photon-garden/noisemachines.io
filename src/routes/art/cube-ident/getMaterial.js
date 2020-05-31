import * as Three from 'three'

function getTexture (colors) {
  // material
  const size = 512

  // create canvas
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  // get context
  const context = canvas.getContext('2d')

  // draw gradient
  context.rect(0, 0, size, size)
  var gradient = context.createLinearGradient(0, 0, size, size)
  gradient.addColorStop(0, colors[0]) // light blue
  gradient.addColorStop(1, colors[1]) // dark blue
  context.fillStyle = gradient
  context.fill()

  const texture = new Three.CanvasTexture(canvas)
  return texture
}

function getMaterial (colors) {
  const texture = getTexture(colors)
  const material = new Three.MeshBasicMaterial({ map: texture })
  return material
}

export default function getMaterials () {
  const materials = [
    getMaterial(['white', 'black']),
    getMaterial(['red', 'blue']),
    getMaterial(['green', 'orange']),
    getMaterial(['purple', 'pink']),
    getMaterial(['grey', 'yellow']),
    getMaterial(['cyan', 'red'])
  ]

  return materials
}
