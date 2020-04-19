export default (start, control, end) => {
  const curve = t => {
    const [x1, y1] = start
    const [x2, y2] = control
    const [x3, y3] = end

    const dt = 1 - t
    const dtSq = dt * dt
    const tSq = t * t

    const point = []
    point[0] = dtSq * x1 + 2 * dt * t * x2 + tSq * x3
    point[1] = dtSq * y1 + 2 * dt * t * y2 + tSq * y3

    return point
  }

  curve.start = start
  curve.control = control
  curve.end = end

  return curve
}
