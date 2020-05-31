const scalePoint = ({ width, height }, point) => {
  point[0] *= width
  point[1] *= height
  return point
}

export default function point (props, element) {
  props.context.save()

  scalePoint(props, element.point)
  props.context.translate(...element.point)
  element.point = [0, 0]

  return function cleanup () {
    props.context.restore()
  }
}
