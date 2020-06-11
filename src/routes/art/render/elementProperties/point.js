export const scalePoint = ({ width, height }, point) => {
  const [x, y] = point
  return [x * width, y * height]
}

export default function point (props, element) {
  props.context.save()

  const scaled = scalePoint(props, element.point)
  props.context.translate(...scaled)
  element.point = [0, 0]

  return function cleanup () {
    props.context.restore()
  }
}
