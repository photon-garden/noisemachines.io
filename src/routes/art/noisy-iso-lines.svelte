<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import getHatchedCircle from "./_helpers/getHatchedCircle"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange } from "canvas-sketch-util/math"
  import * as MarchingSquares from "marchingsquares"
  import { clipPolylinesToBox } from "canvas-sketch-util/geometry"

  const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 100
    }
  }

  const getNoise = point => {
    const noise = random.noise2D(...point, 1)
    return mapRange(noise, -1, 1, 0, 1)
  }

  const mapGrid = (grid, fn) =>
    grid.map(column => column.map(point => fn(point)))

  const sketch = props => {
    const { width, height } = props
    const center = [width / 2, height / 2]
    const boxSize = 7
    const box = [
      [center[0] - boxSize, center[1] - boxSize],
      [center[0] + boxSize, center[0] + boxSize]
    ]

    const grid = getGrid(props)
    const maxRadius = grid.spacing / 2

    const noisyGrid = mapGrid(grid.points, getNoise)
    let lines = MarchingSquares.isoLines(noisyGrid, [0.25, 0.5, 0.75])
    lines = lines.map(line => clipPolylinesToBox(line, box, true, true))
    return props => renderPaths(lines, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
