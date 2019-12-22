<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import { lerp } from "canvas-sketch-util/math"
  import {
    createHatchLines,
    clipLineToCircle
  } from "canvas-sketch-util/geometry"
  import getCircle from "./_helpers/getCircle"
  import getGrid from "./_helpers/getGrid"
  import { piFourths, piHalfs } from "./_helpers/pi"
  import getHatchedCircle from "./_helpers/getHatchedCircle"

  const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      density: 12
    }
  }

  const getCrossHatchedCircle = (
    center,
    radius,
    hatchAngle = piFourths,
    hatchSpacing = 0.09
  ) => {
    const hatches = getHatchedCircle(center, radius, hatchAngle, hatchSpacing)
    const orthogonalHatches = getHatchedCircle(
      center,
      radius,
      hatchAngle + piHalfs,
      hatchSpacing
    )
    return [...hatches, ...orthogonalHatches]
  }

  const shrinkArray = (array, shrinkage) =>
    array.slice(shrinkage, array.length - shrinkage)

  const shrinkGrid = (grid, shrinkage) => {
    const shrunk = shrinkArray(grid, shrinkage) // Shrink columns.
      .map(row => shrinkArray(row, shrinkage)) // Shrink rows.
    return shrunk
  }

  const sketch = props => {
    // List of polylines for our pen plot
    const lines = []
    const steps = 5

    for (let i = 1; i <= steps; i++) {
      const grid = getGrid(props)
      const shrunkPoints = shrinkGrid(grid.points, i)
      const normalizedStep = (i - 1) / (steps - 1)
      const radius = lerp(0.2, grid.spacing / 2, normalizedStep)

      shrunkPoints.flat().forEach(point => {
        const circle = getCircle(point, radius)
        lines.push(circle)

        const hatches = getCrossHatchedCircle(point, radius, piHalfs, 0.1)
        lines.push(hatches)
      })
    }

    return props => renderPaths(lines, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
