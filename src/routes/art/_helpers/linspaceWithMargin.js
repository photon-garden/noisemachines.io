import math from 'canvas-sketch-util/math'

export default (countPoints, margin) => {
  const points = math.linspace(countPoints, true)
  const scale = 1 - margin * 2

  const pointsWithMargin = points.map(point => {
    const scaled = point * scale
    const translated = scaled + margin
    return translated
  })

  return pointsWithMargin
}
