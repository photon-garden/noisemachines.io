<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import getHatchedCircle from "./_helpers/getHatchedCircle"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange } from "canvas-sketch-util/math"

  const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 25
    }
  }

  const getNoise = point => {
    const noise = random.noise2D(...point, 0.1)
    return mapRange(noise, -1, 1, 0, 1)
  }

  const sketch = props => {
    const { width, height } = props
    const grid = getGrid(props)
    const maxRadius = grid.spacing / 2

    const lines = grid.points.flat().map(point => {
      const noise = getNoise(point)
      const radius = noise * maxRadius
      return getHatchedCircle(point, radius, undefined, 0.08)
    })
    return props => renderPaths(lines, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
