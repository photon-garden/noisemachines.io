import linspaceWithMargin from './linspaceWithMargin.js'

export default (width, height, density, margin = 0) => {
  const offsets = linspaceWithMargin(density, margin)
  const points = []

  for (const xOffset of offsets) {
    for (const yOffset of offsets) {
      const x = xOffset * width
      const y = yOffset * height
      points.push([x, y])
    }
  }

  return points
}
