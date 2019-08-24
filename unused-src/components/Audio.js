import React, { PureComponent } from 'react'

class Canvas extends PureComponent {
  static get defaultProps () {
    return {
      innerRef: () => {}
    }
  }
  constructor (...args) {
    super(...args)
    this.handleRef = this.handleRef.bind(this)
  }

  handleRef (audio) {
    if (!audio) {
      return
    }
    this.audio = audio
    this.props.innerRef(audio)
  }

  render () {
    const { innerRef, ...delegatedProps } = this.props
    return <audio ref={this.handleRef} {...delegatedProps} />
  }
}

export default Canvas
