import React from 'react'
import Sketch from '../../components/Sketch'
import Player from '../../components/Player'
import { toSvg } from '../../helpers/svg.helpers'

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
const getNormalizedSine = amplitude => frequency => phase => x =>
  (Math.sin(frequency * TWO_PI * x + phase) + 1) / 2 * amplitude

const getSine = amplitude => frequency => phase => x =>
  Math.sin(frequency * TWO_PI * x + phase) * amplitude

const getSinusoidPoints = (
  amplitude = 1,
  frequency = 1,
  phase = 0,
  sampleRate = 100
) => {
  const sine = getSine(amplitude)(frequency)(phase)
  const xs = getEvenlyDistributedSamples(0, 1, sampleRate)
  const points = xs.map(x => {
    const y = sine(x)
    return { x, y }
  })
  return points
}

const denormalize = (width, height) => point => {
  const xMidpoint = width / 2
  const yMidpoint = height / 2
  return {
    x: xMidpoint + point.x * (width / 2),
    y: point.y * height
  }
}

const normalizedRgba = (
  normalizedRed,
  normalizedGreen,
  normalizedBlue,
  normalizedAlpha
) => {
  const r = normalizedRed * 255
  const g = normalizedGreen * 255
  const b = normalizedBlue * 255
  const a = normalizedAlpha
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const vh = x => x + 'vh'
const percent = x => x + '%'
const flipAxes = point => ({ x: point.y, y: point.x })

const getSinusoidPath = ({
  i,
  frequency,
  amplitude,
  phase,
  color,
  width,
  height
}) => {
  const strokeLinecap = 'butt'
  const sinusoidPoints = getSinusoidPoints(amplitude, frequency, phase, 1000)
    .map(flipAxes)
    .map(denormalize(width, height))
  const d = toSvg(sinusoidPoints)
  const strokeWidth = amplitude + 0.25
  return (
    <path
      d={d}
      key={i}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      fill='none'
    />
  )
}

const toString = ({ x, y }) => '(' + x + ', ' + y + ')'

const getLinePath = ({ start, end, color, width, height }) => {
  const strokeLinecap = 'butt'
  const points = [start, end].map(flipAxes).map(denormalize(width, height))
  const d = toSvg(points)
  const strokeWidth = 1
  const key = toString(start) + ' - ' + toString(end)
  return (
    <path
      d={d}
      key={key}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      fill='none'
    />
  )
}

const Sines = props => {
  const t = props.t || 0
  const size = Math.min(window.innerWidth, window.innerHeight)
  const width = size
  const height = size

  const cx = width / 2
  const cy = height / 2
  const r = 50

  const paths = []
  const alphaSine = getNormalizedSine(1)(2)(0)
  const partials = 32
  for (let i = 0; i < partials; i++) {
    const normalizedIndex = i / partials
    // const alpha = 1 - normalizedIndex
    // const oscillatingAlpha = alphaSine(alpha + t)
    // const color = normalizedRgba(1, 1, 1, oscillatingAlpha)
    const color = normalizedRgba(1, 1, 1, 1)
    const frequency = 2 ** i
    // const frequency = 1.01 ** i
    // const frequency = 0.9 ** i
    const amplitude = 1 / frequency
    // const amplitude = 1
    const path = getSinusoidPath({
      i,
      frequency,
      amplitude,
      phase: t,
      // phase: 0,
      color,
      width,
      height
    })
    paths.push(path)
  }

  // paths.push(
  //   getLinePath({
  //     start: { x: 0, y: 1 },
  //     end: { x: 0.1, y: 1 },
  //     color: 'white',
  //     width,
  //     height
  //   })
  // )

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      {paths}
    </svg>
  )
}

const Demo = () => (
  <Player speed={-1}>{progress => <Sines t={progress} />}</Player>
)
// <Sines offset={0} />

const About = () => (
  <p className='major'>
    I'm a musician and programmer. I co-founded
  </p>
)

export default () => {
  return <Sketch demo={<Demo />} about={<About />} />
}
