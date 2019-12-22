<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import getHatchedCircle from "./_helpers/getHatchedCircle"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange } from "canvas-sketch-util/math"
  import { triangle } from "./_helpers/waves"
  import { twoPi } from "./_helpers/pi"

  const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 25
    },
    animate: true,
    duration: 10,
    fps: 30
  }

  const getNoise = (point, playhead) => {
    const noise = random.noise3D(...point, playhead, 0.1)
    return mapRange(noise, -1, 1, 0, 1)
  }

  const animateCircle = (circle, playhead) => {
    return circle.map(([a, b]) => {})
  }

  const sketch = props => {
    const { width, height } = props
    const grid = getGrid(props)
    const maxRadius = grid.spacing / 2

    return props => {
      const z = triangle(props.playhead)
      console.log(z)
      const circles = grid.points.flat().map(point => {
        const noise = getNoise(point, z * 5)
        const radius = noise * maxRadius
        const hatchedCircle = getHatchedCircle(point, radius, undefined, 0.08)
        return hatchedCircle
      })
      // const animatedLines = circle.map(animateCircle)
      renderPaths(circles, props)
    }
  }
</script>

<SketchCanvas {sketch} {settings} />
