import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'

export default (x, y, array) => {
  const lastIndex = array.length - 1
  const noise = random.noise2D(x, y)
  const normalized = math.mapRange(noise, -1, 1, 0, 1)
  const index = Math.round(normalized * lastIndex)
  return array[index]
}
