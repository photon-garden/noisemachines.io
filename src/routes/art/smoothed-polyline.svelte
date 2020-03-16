<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import random from "canvas-sketch-util/random"
  import { smoothPointsRecursively } from "./_helpers/smooth"

  const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {
      pointCount: 100
    }
  }

  const randomWalkFrom = point => {
    const perturbation = random.onCircle(0.5)
    return point.map((coordinate, i) => coordinate + perturbation[i])
  }

  const getRandomPath = props => {
    const {
      width,
      height,
      data: { pointCount }
    } = props
    const start = [random.range(width), random.range(height)]

    const points = [start]
    for (let i = 0; i < pointCount; i++) {
      const currentPoint = points[i]
      const nextPoint = randomWalkFrom(currentPoint)
      points.push(nextPoint)
    }

    return points
  }

  const sketch = props => {
    const paths = [
      getRandomPath(props),
      getRandomPath(props),
      getRandomPath(props)
    ]
    const smoothed = paths.map(path => smoothPointsRecursively(path, 3))

    return props => renderPaths(smoothed, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
