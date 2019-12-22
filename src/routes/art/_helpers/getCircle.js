import pi from './pi'
export default ([cx, cy], r, steps = 50) => {
  const points = []
  for (let i = 0; i < steps; i++) {
    const t = i / Math.max(1, steps - 1)
    const angle = pi * 2 * t
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    points.push([x, y])
  }
  return points
}
