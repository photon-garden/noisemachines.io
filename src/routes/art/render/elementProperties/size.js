import scaleAlongLargestAxis from './helpers/scaleAlongLargestAxis'

export default function size (props, action) {
  action.size = scaleAlongLargestAxis(props, action.size)
}
