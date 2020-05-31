import point from './elementProperties/point'
import size from './elementProperties/size'
import withElementProperties from './elementProperties/withElementProperties'
import multiFill, {
  elementProperties as multiFillElementProperties
} from './helpers/multiFill'
import stroke, {
  elementProperties as strokeElementProperties
} from './helpers/stroke'

const elementProperties = {
  ...multiFillElementProperties,
  ...strokeElementProperties,
  point,
  size
}

function dot (props, element) {
  const { context } = props
  const { point, size } = element

  context.beginPath()
  context.arc(point[0], point[1], size, 0, Math.PI * 2)
  context.closePath()

  if (element.fillStyles && element.fillStyles.length > 0) {
    multiFill(props, element)
  }

  stroke(props, element)
}

export default withElementProperties(elementProperties, dot)
