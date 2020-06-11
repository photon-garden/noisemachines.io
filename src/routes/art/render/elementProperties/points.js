import { scalePoint } from './point'

export default function points (props, element) {
  props.context.save()
  const scaledPoints = element.points.map(point => scalePoint(props, point))

  const start = scaledPoints[0]
  props.context.translate(...start)

  element.points = scaledPoints.map(point => {
    const x = point[0] - start[0]
    const y = point[1] - start[1]
    return [x, y]
  })

  return function cleanup () {
    props.context.restore()
  }
}
