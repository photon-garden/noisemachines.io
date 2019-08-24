const moveTo = ({ x, y }) => `M ${x},${y} `
const lineTo = ({ x, y }) => `L ${x},${y}`

export const toSvg = points => {
  let svg = moveTo(points[0])
  for (let i = 1; i < points.length; i++) {
    const point = points[i]
    svg = svg + ' ' + lineTo(point)
  }
  return svg
}
