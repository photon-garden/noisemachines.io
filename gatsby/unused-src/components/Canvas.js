import React, { PureComponent } from 'react'

import { scaleCanvas } from '../helpers/canvas.helpers'

// type Props = {
//   innerRef: (elem: HTMLElement) => void,
// };

class Canvas extends PureComponent {
  static get defaultProps () {
    return {
      width: 800,
      height: 600
    }
  }

  constructor (...args) {
    super(...args)
    this.handleRef = this.handleRef.bind(this)
  }

  handleRef (canvas) {
    if (!canvas) {
      return
    }
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    scaleCanvas(this.canvas, this.ctx)

    this.props.innerRef(this.canvas, this.ctx)
  }

  render () {
    const { innerRef, ...delegatedProps } = this.props
    return <canvas ref={this.handleRef} {...delegatedProps} />
  }
}

export default Canvas
