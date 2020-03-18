<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange, linspace } from "canvas-sketch-util/math"
  import clipPolylineToCircle from "./_helpers/clipPolylineToCircle"
  import getCircle from "./_helpers/getCircle"
  import getIsoLines from "./_helpers/getIsoLines"
  import tome from "chromotome"

  const palette = tome.get("cc238")

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 100,
      radius: 7,
      isoLineThresholds: linspace(4).slice(1) // the first element of the array returned by linspace is always 0, which is not helpful for us
    }
  }

  const getNoise = point => {
    const frequency = 2
    const noise = random.noise2D(...point, frequency)
    return mapRange(noise, -1, 1, 0, 1)
  }

  const mapGrid = (grid, fn) =>
    grid.map(column => column.map(point => fn(point)))

  const clipLineCollectionToCircle = (center, radius) => lineCollection =>
    lineCollection.map(line => clipPolylineToCircle(line, center, radius))

  export const sketch = props => {
    const {
      width,
      height,
      data: { radius, isoLineThresholds }
    } = props
    const center = [width / 2, height / 2]

    const grid = getGrid(props)
    const noisyGrid = mapGrid(grid.points, getNoise)

    let lineCollections = getIsoLines(noisyGrid, isoLineThresholds, 3)
    lineCollections = lineCollections.map(
      clipLineCollectionToCircle(center, radius)
    )

    const circle = getCircle(center, radius, 100)
    lineCollections.push(circle)

    console.log(props)

    return props =>
      renderPaths(lineCollections, {
        ...props,
        background: palette.background,
        foreground: palette.colors[2],
        lineWidth: 0.1
      })
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="noisy-clipped-iso-lines" />
