import React from 'react'
import {
  getPointsForWaveform,
  createSVGPathFromWaveformPoints,
  translateAxisRelativeYValue
} from '../helpers/waveform.helpers'

import bannerImageSource from '../images/banner.jpg'
import pic01Source from '../images/pic01.jpg'

class Animation extends React.Component {
  constructor () {
    super()
    this.state = {
      offset: 0
    }
  }
  componentDidMount () {
    const animate = () => {
      this.updateProgress()
      window.requestAnimationFrame(animate)
    }
    animate()
  }
  updateProgress () {
    this.setState((previousState, props) => {
      return { offset: previousState.offset + props.speed }
    })
  }
  render () {
    const props = {
      color: 'black',
      strokeWidth: '50px',
      opacity: 0.5,
      width: 200,
      height: 1000,
      frequency: 0.2,
      amplitude: 0.75,
      shape: 'sine'
    }
    const {
      color,
      strokeWidth,
      strokeLinecap,
      width,
      height,
      shape,
      frequency,
      amplitude
    } = props

    const points = getPointsForWaveform({
      shape,
      frequency,
      amplitude,
      width,
      offset: this.state.offset
    }).map(point => {
      const relativeY = translateAxisRelativeYValue(point.y, height)
      return {
        x: point.x,
        y: relativeY
      }
    })

    const svgPath = createSVGPathFromWaveformPoints(points, height)

    const cx = width / 2 + this.state.offset
    const cy = height / 2
    const r = height / 2
    // return (
    //   <svg width={width} height={height} style={{ overflow: 'visible' }}>
    //     <defs>
    //       <clipPath id='circle-clip'>
    //         <circle cx={cx} cy={cy} r={r} />
    //       </clipPath>
    //     </defs>
    //     <circle cx={cx} cy={cy} r={r} fill='none' stroke='black' />
    //     <path
    //       id='waveform'
    //       d={svgPath}
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap={strokeLinecap}
    //       fill='none'
    //       clipPath='url(#circle-clip)'
    //     />
    //   </svg>
    // )
    return (
      <svg width={0} height={0} style={{ overflow: 'visible' }}>
        <defs>
          <clipPath id='waveform'>
            <path
              d={svgPath}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap={strokeLinecap}
              fill='none'
              clipPath='url(#circle-clip)'
            />
          </clipPath>
        </defs>
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
}

Animation.defaultProps = {
  speed: 0.1
}

export default () => {
  return (
    <div>
      <Animation />
      <img id='hero' src={bannerImageSource} />
    </div>
  )
}
