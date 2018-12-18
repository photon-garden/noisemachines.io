import React from 'react'
import Sketch from '../../components/Sketch'
import Canvas from '../../components/Canvas'
import Player from '../../components/Player'
import Audio from '../../components/Audio'
import polyglotUrl from '../../audio/Polyglot.wav'

const size = 500
let times = 0
class Demo extends React.Component {
  constructor (props) {
    super(props)

    this.handleAudioRef = this.handleAudioRef.bind(this)
    this.handleCanvasRef = this.handleCanvasRef.bind(this)
    this.draw = this.draw.bind(this)
  }
  handleAudioRef (audio) {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)()
    this.analyser = audioContext.createAnalyser()
    // this.analyser.fftSize = 2048
    this.analyser.fftSize = 256

    this.audio = audio
    this.audioContext = audioContext

    const source = audioContext.createMediaElementSource(audio)
    source.connect(this.analyser)
    this.analyser.connect(audioContext.destination)

    this.currentAudioSamples = new Uint8Array(this.analyser.frequencyBinCount)
    // this.allAudioSamples = new Array(10000)
    this.tryStartDrawing()
  }
  handleCanvasRef (canvas) {
    this.canvas = canvas
    this.canvasContext = canvas.getContext('2d')
    this.canvasContext.lineWidth = 1
    this.canvasContext.strokeStyle = 'white'

    this.tryStartDrawing()
  }
  tryStartDrawing () {
    if (this.canvas && this.audio) {
      this.draw()
    }
  }
  draw () {
    times++

    // if (times > 3) return
    window.requestAnimationFrame(this.draw)
    const previousImageData = this.canvasContext.getImageData(0, 0, size, size)
    this.canvasContext.clearRect(0, 0, size, size)
    this.analyser.getByteTimeDomainData(this.currentAudioSamples)

    const currentWindowWidth = size * 0.1
    const sliceWidth = currentWindowWidth / this.currentAudioSamples.length

    this.canvasContext.putImageData(
      previousImageData,
      currentWindowWidth * 2,
      0
    )

    this.canvasContext.beginPath()
    for (let i = 0; i < this.currentAudioSamples.length; i++) {
      const x = sliceWidth * i
      const normalizedVolume = this.currentAudioSamples[i] / 128.0
      const y = normalizedVolume * size / 2

      if (i === 0) {
        this.canvasContext.moveTo(x, y)
      } else {
        this.canvasContext.lineTo(x, y)
      }
    }
    // this.canvasContext.lineTo(this.canvas.width, this.canvas.height / 2)
    this.canvasContext.stroke()
  }
  render () {
    return (
      <div>
        <Canvas width={size} height={size} innerRef={this.handleCanvasRef} />
        <Audio src={polyglotUrl} controls innerRef={this.handleAudioRef} />
      </div>
    )
  }
}

const About = () => (
  <p className='major'>
    I'm a musician and programmer.
  </p>
)

export default () => {
  return <Sketch demo={<Demo />} about={<About />} />
}
