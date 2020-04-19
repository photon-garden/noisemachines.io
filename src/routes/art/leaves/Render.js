export default class Render {
  constructor ({ context, width, height, data }) {
    this.context = context
    this.width = width
    this.height = height
    this.data = data
  }

  scalePoint ([x, y]) {
    return [x * this.width, y * this.height]
  }

  point (point) {
    point = this.scalePoint(point)

    this.context.beginPath()
    this.context.arc(point[0], point[1], 10, 0, Math.PI * 2, false)
    this.context.stroke()
  }

  points (points) {
    for (const point of points) {
      this.point(point)
    }
  }

  line (start, end) {
    start = this.scalePoint(start)
    end = this.scalePoint(end)

    this.context.beginPath()
    this.context.moveTo(start[0], start[1])
    this.context.lineTo(end[0], end[1])
    this.context.stroke()
  }

  polyline (segments) {
    for (let i = 0; i < segments.length - 1; i++) {
      const current = segments[i]
      const next = segments[i + 1]
      console.log(current, next)
      this.line(current, next)
    }
  }

  curve ({ start, control, end }) {
    start = this.scalePoint(start)
    control = this.scalePoint(control)
    end = this.scalePoint(end)

    this.context.beginPath()
    this.context.moveTo(start[0], start[1])
    this.context.quadraticCurveTo(control[0], control[1], end[0], end[1])
    this.context.stroke()
  }

  preserve (property, fn) {
    const previousValue = this.context[property]
    fn(previousValue)
    this.context[property] = previousValue
  }

  clear () {
    this.preserve('fillStyle', () => {
      this.context.fillStyle = this.data.backgroundColor
      this.context.fillRect(0, 0, this.width, this.height)
    })
  }

  distribution (draw) {
    this.preserve('globalAlpha', () => {
      this.context.globalAlpha = 0.01
      for (let i = 0; i < 1000; i++) {
        draw()
      }
    })
  }
}
