import React from 'react'
import variables from '../sass/variables.scss'
import Sky from './Sky'
const aspectRatio = 1.058035714

export default () => {
  const width = 350
  const height = width * aspectRatio
  return (
    <div
      style={{ width: width, height: height }}
      className='impossible-window z2'
    >
      <Sky
        width={width - variables.skyMargin}
        height={height - variables.skyMargin}
      />
      <svg
        width={width}
        className='window'
        height={height}
        viewBox='0 0 224 237'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='impossible window'>
          <g id='bottom arm'>
            <path
              id='bottom arm/bicep'
              d='M119 185V146H165L184 165H204V146H224V185H119Z'
              fill={variables.background}
            />
            <path
              id='bottom arm/bicep edge'
              d='M119 146H165L184 165H204V146H224'
              stroke='black'
              strokeWidth='0.1'
            />
            <path
              id='bottom arm/outside'
              d='M52.5 119H36L115 198L224 197.875V185H119L52.5 119Z'
              fill='#E0EBDD'
              stroke='black'
              strokeWidth='0.1'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              id='bottom arm/just the tip'
              d='M36 106V119H52.5V106H36Z'
              fill={variables.background}
              stroke='black'
              strokeWidth='0.1'
              strokeLinejoin='round'
            />
            <path
              id='bottom arm/forearm'
              d='M52.5 119V106H79L119 146V185L52.5 119Z'
              fill='#BED7BA'
              stroke='black'
              strokeWidth='0.1'
            />
          </g>
          <g id='top arm'>
            <path
              id='top arm/tricep'
              d='M1 53V94H133V53H1Z'
              fill={variables.background}
            />
            <path
              id='top arm/tricep edge'
              d='M1 53H133'
              stroke='black'
              strokeWidth='0.1'
            />
            <path
              id='top arm/forearm'
              d='M204 124L133 53V94L204 165V124Z'
              fill='#BED7BA'
              stroke='black'
              strokeWidth='0.1'
              strokeLinejoin='round'
            />
            <path
              id='top arm/outside'
              d='M13 106L1 94H133L204 165H184L125 106H13Z'
              fill='#E0EBDD'
              stroke='black'
              strokeWidth='0.1'
              strokeLinejoin='round'
            />
          </g>
          <g id='borders'>
            <g id='insets'>
              <path
                id='insets/top left'
                d='M1 1V53H14V14L1 1Z'
                fill='#BED7BA'
                stroke='black'
                strokeWidth='0.1'
                strokeLinejoin='round'
              />
              <path
                id='insets/top'
                d='M14 14L1 1H224V14H14Z'
                fill='#E0EBDD'
                stroke='black'
                strokeWidth='0.1'
                strokeLinejoin='round'
              />
              <path
                id='insets/bottom left'
                d='M13 106L1 94V237H13V106Z'
                fill='#BED7BA'
                stroke='black'
                strokeWidth='0.1'
                strokeLinejoin='round'
              />
            </g>
            <g id='edges'>
              <path
                id='edges/bottom'
                d='M1 237H224V185'
                stroke='black'
                strokeWidth='0.1'
                strokeLinejoin='round'
              />
              <path
                id='edges/right'
                d='M224 146V1'
                stroke='black'
                strokeWidth='0.1'
                strokeLinejoin='round'
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
