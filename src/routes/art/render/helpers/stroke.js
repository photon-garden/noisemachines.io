import noOp from '../elementProperties/noOp'
import lineWidth from '../elementProperties/lineWidth'

export const elementProperties = {
  lineWidth,
  strokeStyle: noOp
}

export default function stroke (props, element) {
  const { context } = props

  if (element.strokeStyle) {
    context.lineWidth = element.lineWidth
    context.strokeStyle = element.strokeStyle
    context.stroke()
  }
}
