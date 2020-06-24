import * as line from './line'
import withElementProperties from './elementProperties/withElementProperties'

export const elementProperties = {
  ...line.elementProperties
}

function render (props, element) {
  const [a, b, c] = element.points
  line.render({
    ...element,
    points: [a, b]
  })

  line.render({
    ...element,
    points: [b, c]
  })

  line.render({
    ...element,
    points: [a, c]
  })
}

export default withElementProperties(elementProperties, render)
