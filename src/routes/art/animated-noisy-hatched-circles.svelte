<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import getHatchedCircle from "./_helpers/getHatchedCircle"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange } from "canvas-sketch-util/math"
  import { triangle } from "./_helpers/waves"
  import { twoPi } from "./_helpers/pi"
  import isBrowser from "./_helpers/isBrowser"

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 25
    },
    animate: isBrowser,
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

  export const sketch = props => {
    const { width, height } = props
    const grid = getGrid(props)
    const maxRadius = grid.spacing / 2

    const render = props => {
      const z = triangle(props.playhead)
      const circles = grid.points.flat().map(point => {
        const noise = getNoise(point, z * 5)
        const radius = noise * maxRadius
        const hatchedCircle = getHatchedCircle(point, radius, undefined, 0.08)
        return hatchedCircle
      })
      renderPaths(circles, props)
    }

    if (settings.animate) {
      return render
    } else {
      render({
        ...props,
        playhead: 0
      })
      return () => {}
    }
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="animated-noisy-hatched-circles" />
