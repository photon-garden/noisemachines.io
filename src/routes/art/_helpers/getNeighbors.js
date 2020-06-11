const offsets = [-1, 0, 1]

function isInGrid (x, y, grid) {
  const width = grid.length
  const height = grid[0].length
  return x >= 0 && x < width && y >= 0 && y < height
}

export default function * getNeighbors (grid, x, y) {
  for (const xOffset of offsets) {
    for (const yOffset of offsets) {
      const neighborX = x + xOffset
      const neighborY = y + yOffset
      if (xOffset === 0 && yOffset === 0) {
        continue
      }

      if (isInGrid(neighborX, neighborY, grid)) {
        const neighbor = grid[neighborX][neighborY]
        yield neighbor
      }
    }
  }
}
