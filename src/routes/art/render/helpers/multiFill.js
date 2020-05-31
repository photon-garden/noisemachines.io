import noOp from '../elementProperties/noOp'

export const elementProperties = {
  fillStyles: noOp
}

function setFillStyle (context, fillStyle) {
  if (!fillStyle.value && !fillStyle.opacity) {
    context.fillStyle = fillStyle
  } else {
    context.globalAlpha = fillStyle.opacity
    context.fillStyle = fillStyle.value
  }
}

const forEachFillStyle = (context, fillStyles, draw) => {
  const previousAlpha = context.globalAlpha

  for (const fillStyle of fillStyles) {
    setFillStyle(context, fillStyle)
    draw()
  }

  context.globalAlpha = previousAlpha
}

export default function multiFill (props, element) {
  const { context } = props

  forEachFillStyle(context, element.fillStyles, () => context.fill())
}
