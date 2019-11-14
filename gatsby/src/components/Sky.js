import React, { useState } from 'react'
import variables from '../sass/variables.scss'

const draw = canvas => {
  const context = canvas.getContext('2d')
  context.fillStyle = variables.sky
  context.fillRect(0, 0, canvas.width, canvas.height)
}

const useCanvas = () => {
  const [canvas, setCanvas] = useState(null)
  if (canvas) {
    draw(canvas)
  }
  return [canvas, setCanvas]
}

const CanvasSky = ({ width, height }) => {
  const [canvas, setCanvas] = useCanvas()
  return (
    <canvas className='sky' width={width} height={height} ref={setCanvas} />
  )
}

const ImageSky = ({ width, height }) => {
  return (
    <div style={{ width, height, overflow: 'hidden' }} className='sky'>
      <img
        style={{ transform: 'translate(-29%, -20%) rotate(-45deg)' }}
        src='https://images.unsplash.com/photo-1481007553706-bde1ba8e91fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
      />
    </div>
  )
}

export default CanvasSky
