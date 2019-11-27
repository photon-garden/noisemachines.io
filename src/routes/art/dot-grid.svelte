<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import { lerp } from "canvas-sketch-util/math"
  import {
    createHatchLines,
    clipLineToCircle
  } from "canvas-sketch-util/geometry"

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

  const PI_HALFS = Math.PI / 2
  const PI_FOURTHS = Math.PI / 4

  const getCircle = ([cx, cy], r) => {
    const steps = 50
    const points = []
    for (let i = 0; i < steps; i++) {
      const t = i / Math.max(1, steps - 1)
      const angle = Math.PI * 2 * t
      const x = cx + Math.cos(angle) * r
      const y = cy + Math.sin(angle) * r
      points.push([x, y])
    }
    return points
  }

  const getBoundsForCircle = ([x, y], r) => [[x - r, y - r], [x + r, y + r]]
  const getHatchedCircle = (
    center,
    r,
    hatchAngle = PI_FOURTHS,
    hatchSpacing = 0.09
  ) => {
    const bounds = getBoundsForCircle(center, r)
    const hatches = createHatchLines(bounds, hatchAngle, hatchSpacing)
    const clippedHatches = hatches.map(hatch => {
      const clipped = []
      clipLineToCircle(...hatch, center, r, clipped)
      return clipped
    })
    return clippedHatches
  }

  const getCrossHatchedCircle = (
    center,
    radius,
    hatchAngle = PI_FOURTHS,
    hatchSpacing = 0.09
  ) => {
    const hatches = getHatchedCircle(center, radius, hatchAngle, hatchSpacing)
    const orthogonalHatches = getHatchedCircle(
      center,
      radius,
      hatchAngle + PI_HALFS,
      hatchSpacing
    )
    return [...hatches, ...orthogonalHatches]
  }

  const getGrid = ({ width, height, data: { density } }) => {
    const points = []

    const smallerAxis = Math.min(width, height)
    const spacing = smallerAxis / (density - 1)
    const columns = Math.round(width / spacing)
    const rows = Math.round(height / spacing)

    for (let column = 0; column <= columns; column++) {
      points[column] = []
      for (let row = 0; row <= rows; row++) {
        const x = column * spacing
        const y = row * spacing
        points[column].push([x, y])
      }
    }

    return { points, spacing }
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

        const hatches = getCrossHatchedCircle(point, radius, Math.PI / 2, 0.1)
        lines.push(hatches)
      })
    }

    return props => renderPaths(lines, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
