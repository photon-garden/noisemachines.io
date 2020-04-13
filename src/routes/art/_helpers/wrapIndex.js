import math from 'canvas-sketch-util/math'

export default (array, index) => {
  const wrappedIndex = math.wrap(index, 0, array.length)
  return array[wrappedIndex]
}
