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

export default ({ width, height }) => {
  const [canvas, setCanvas] = useCanvas()
  return (
    <canvas className='sky' width={width} height={height} ref={setCanvas} />
  )
}
