export default ({ width, height, data: { density } }) => {
  const points = []

  const smallerAxis = Math.min(width, height)
  const spacing = smallerAxis / (density - 1)
  const columns = Math.round(width / spacing)
  const rows = Math.round(height / spacing)

  for (let column = 0; column <= columns; column++) {
    points[column] = []
    for (let row = 0; row <= rows; row++) {
      const x = column * spacing
      const y = row * spacing
      points[column].push([x, y])
    }
  }

  return { points, spacing }
}
