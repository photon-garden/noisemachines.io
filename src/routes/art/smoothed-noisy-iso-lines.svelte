<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange } from "canvas-sketch-util/math"
  import { clipPolylinesToBox } from "canvas-sketch-util/geometry"
  import getSmoothIsoLines from "./_helpers/getIsoLines"

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 100,
      boxSize: 7
    }
  }

  const getNoise = point => {
    const frequency = 10
    const noise = random.noise2D(...point, frequency)
    return mapRange(noise, -1, 1, 0, 1)
  }

  const mapGrid = (grid, fn) =>
    grid.map(column => column.map(point => fn(point)))

  export const sketch = props => {
    const {
      width,
      height,
      data: { boxSize }
    } = props
    const center = [width / 2, height / 2]
    const box = [
      [center[0] - boxSize, center[1] - boxSize],
      [center[0] + boxSize, center[0] + boxSize]
    ]

    const grid = getGrid(props)
    const maxRadius = grid.spacing / 2

    const noisyGrid = mapGrid(grid.points, getNoise)
    let lineCollections = getSmoothIsoLines(noisyGrid, [0.25, 0.5, 0.75], 3)
    lineCollections = lineCollections.map(lineCollection =>
      clipPolylinesToBox(lineCollection, box, true, true)
    )

    return props => renderPaths(lineCollections, props)
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="smoothed-noisy-iso-lines" />
