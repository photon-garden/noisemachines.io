import points from './elementProperties/points'
import withElementProperties from './elementProperties/withElementProperties'
import stroke, {
  elementProperties as strokeElementProperties
} from './helpers/stroke'

export const elementProperties = {
  ...strokeElementProperties,
  points
}

export function render (props, element) {
  const { context } = props
  const [start, end] = element.points

  context.beginPath()
  context.moveTo(start[0], start[1])
  context.lineTo(end[0], end[1])

  stroke(props, element)
}

export default withElementProperties(elementProperties, render)
