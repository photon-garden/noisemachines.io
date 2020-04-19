import Render from './Render'
import { vec2 } from 'gl-matrix'
import math from 'canvas-sketch-util/math'

const scaleLine = ([start, end], scale) => {
  const difference = vec2.subtract([], end, start)
  const scaled = vec2.scale([], difference, scale)
  const newEnd = vec2.add([], start, scaled)
  return [start, newEnd]
}

const getNormalizedIndex = (index, array) => {
  const highestIndex = array.length - 1
  return index / highestIndex
}

const rotateLine = ([start, end], angle) => {
  const [x, y] = vec2.subtract([], end, start)

  const cos = Math.cos(angle)
  const sin = Math.sin(angle)

  const offsetX = cos * x - sin * y
  const offsetY = sin * x + cos * y
  const offset = [offsetX, offsetY]

  const newEnd = vec2.add([], start, offset)

  return [start, newEnd]
}

const getTangentLine = (current, next) => {
  const tangent = vec2.subtract([], next, current)
  const currentPlusTangent = vec2.add([], current, tangent)
  return [current, currentPlusTangent]
}

export default class LeafRender extends Render {
  rib (distanceFromBase, current, next, angle = Math.PI / 4) {
    const tangentLine = getTangentLine(current, next)

    const leafWidth = 20
    const leafShape = Math.sin(distanceFromBase * Math.PI)
    const extrudeDistance = (leafShape * leafWidth) / 2

    const leftLeafDirection = rotateLine(tangentLine, angle)
    const rightLeafDirection = rotateLine(tangentLine, -angle)

    const leftLeaf = scaleLine(leftLeafDirection, extrudeDistance)
    const rightLeaf = scaleLine(rightLeafDirection, extrudeDistance)

    this.line(...leftLeaf)
    this.line(...rightLeaf)
  }

  ribs (points, startAngle, endAngle, progress) {
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i]
      const next = points[i + 1]

      const distanceFromBase = getNormalizedIndex(i, points)
      const angle = math.lerp(startAngle, endAngle, progress)

      this.rib(distanceFromBase, current, next, angle)
    }
  }
}
