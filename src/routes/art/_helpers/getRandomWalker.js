import random from 'canvas-sketch-util/random'

const inRange = (value, min, max) => value >= min && value < max
const outOfRange = (value, min, max) => !inRange(value, min, max)

export default (min, max) => {
  let lastValue = Math.floor(random.range(min, max))

  return () => {
    let newValue = lastValue + random.sign()
    while (outOfRange(newValue, min, max)) {
      newValue = lastValue + random.sign()
    }
    lastValue = newValue
    return newValue
  }
}
