import React from 'react'

const secondsBetween = (now, then) => (now - then) / 1000

export default class Player extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
      lastTickAt: null
    }
    this.tick = this.tick.bind(this)
  }
  componentDidMount () {
    this.start()
  }
  start () {
    this.setState({ lastTickAt: new Date() }, this.tick)
  }
  tick () {
    this.requestAnimationFrameId = window.requestAnimationFrame(() => {
      const { lastTickAt, progress } = this.state
      const now = new Date()
      const secondsSinceLastTick =
        secondsBetween(now, lastTickAt) * this.props.speed
      const updatedProgress = progress + secondsSinceLastTick
      this.setState({ lastTickAt: now, progress: updatedProgress }, this.tick)
    })
  }
  render () {
    return this.props.children(this.state.progress)
  }
}
