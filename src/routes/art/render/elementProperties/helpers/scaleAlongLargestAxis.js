function getLargestAxis ({ width, height }) {
  return Math.max(width, height)
}

export default function scaleNumber (props, n) {
  return getLargestAxis(props) * n
}
