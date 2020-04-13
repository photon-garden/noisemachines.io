import linspaceWithMargin from './linspaceWithMargin.js'

export default (width, height, density, margin) => {
  const spacing = linspaceWithMargin(density, margin)
  const xs = spacing.map(point => point * width)
  const ys = spacing.map(point => point * height)

  return [xs, ys]
}
