import scaleAlongLargestAxis from './helpers/scaleAlongLargestAxis'

export default function lineWidth (props, element) {
  element.lineWidth = scaleAlongLargestAxis(props, element.lineWidth)
}
