export default ([centerX, centerY], rotation, radius = 0.1) => {
  const xOffset = Math.cos(rotation) * radius
  const yOffset = Math.sin(rotation) * radius

  const start = [centerX + xOffset, centerY + yOffset]
  const end = [centerX - xOffset, centerY - yOffset]

  return [start, end]
}
