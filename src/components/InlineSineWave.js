import React from 'react'
import { toSvg } from '../helpers/svg.helpers'

const getEvenlyDistributedSamples = (min, max, n) => {
  const distance = max - min
  const delta = distance / n
  const samples = []
  for (let i = 0; i < n; i++) {
    const sample = min + i * delta
    samples.push(sample)
  }
  return samples
}

const TWO_PI = 2 * Math.PI

// Sine wave that ranges from 0 to 1, inclusive, with a period of 0 to 1
const normalizedSine = (x, phase) => (Math.sin(TWO_PI * x + phase) + 1) / 2

const getPoints = (width, height, offset) => {
  const normalizedXs = getEvenlyDistributedSamples(-0.5, 1.5, 100)
  const points = normalizedXs.map(normalizedX => {
    const y = normalizedSine(normalizedX, offset) * height
    const x = normalizedX * width
    return { x, y }
  })
  return points
}

export default props => {
  const offset = props.offset || 0
  const size = 10
  const width = size
  const height = size

  const cx = width / 2
  const cy = height / 2
  const r = height * 0.75

  const points = getPoints(width, height, offset)
  const svgPath = toSvg(points)

  const color = 'black'
  const strokeWidth = 1
  const strokeLinecap = 'butt'

  return (
    <svg
      width={width}
      height={height}
      style={{ overflow: 'visible', margin: '0 0.2rem 0 0.2rem' }}
    >
      <defs>
        <clipPath id='circle-clip'>
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill='none' stroke='black' />
      <path
        d={svgPath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill='none'
        clipPath='url(#circle-clip)'
      />
    </svg>
  )
}
