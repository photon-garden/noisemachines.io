<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import getHatchedCircle from "./_helpers/getHatchedCircle"
  import random from "canvas-sketch-util/random"
  import getGrid from "./_helpers/getGrid"
  import { mapRange, linspace } from "canvas-sketch-util/math"
  import * as MarchingSquares from "marchingsquares"
  import clipPolylineToCircle from "./_helpers/clipPolylineToCircle"
  import getCircle from "./_helpers/getCircle"
  import { smoothPoints } from "./_helpers/smooth"

  const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 500,
      radius: 7,
      isoLineThresholds: linspace(10).slice(1) // the first element of the array returned by linspace is always 0, which is not helpful for us
    }
  }

  const getNoise = point => {
    const frequency = 2
    const noise = random.noise2D(...point, frequency)
    return mapRange(noise, -1, 1, 0, 1)
  }

  const mapGrid = (grid, fn) =>
    grid.map(column => column.map(point => fn(point)))

  const recursivelySmooth = (polyline, depth) => {
    let smoothed = polyline
    for (let i = 0; i < depth; i++) {
      smoothed = smoothPoints(smoothed, 0.49)
    }
    return smoothed
  }

  const sketch = props => {
    const {
      width,
      height,
      data: { radius, isoLineThresholds }
    } = props
    const center = [width / 2, height / 2]

    const grid = getGrid(props)
    const noisyGrid = mapGrid(grid.points, getNoise)

    let contours = MarchingSquares.isoLines(noisyGrid, isoLineThresholds)
    const smoothed = contours.map(contour =>
      contour
        .map(line => {
          const clipped = clipPolylineToCircle(line, center, radius)
          const smoothed = clipped.map(line => recursivelySmooth(line, 2))
          return smoothed
        })
        .flat()
    )

    const jagged = contours.map(contour =>
      contour
        .map(line => {
          const clipped = clipPolylineToCircle(line, center, radius)
          return clipped
        })
        .flat()
    )

    // contours = [...smoothed, ...jagged]
    contours = smoothed
    // contours = jagged

    const circle = getCircle(center, radius, 100)
    contours.push(circle)

    return props => renderPaths(contours, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
