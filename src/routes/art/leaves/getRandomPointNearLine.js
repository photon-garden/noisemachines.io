import random from 'canvas-sketch-util/random'
import { vec2 } from 'gl-matrix'

export default (start, end) => {
  const t = random.range(0.5, 0.65)
  const pointOnLine = vec2.lerp([], start, end, t)

  const radius = random.range(0.2, 0.25)
  const offset = vec2.random([], radius)

  const randomPointNearLine = vec2.add([], pointOnLine, offset)

  return randomPointNearLine
}
