<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import getRotatedUnitLine from "./_helpers/getRotatedUnitLine"
  import getGridWithMargin from "./_helpers/getGridWithMargin"
  import wrapIndex from "./_helpers/wrapIndex"
  import random from "canvas-sketch-util/random"

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    data: {}
  }

  export const sketch = props => {
    const { width, height } = props
    const center = [width / 2, height / 2]

    const paths = []
    const rotations = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4]
    const points = getGridWithMargin(width, height, 50, 0.1)

    points.forEach((point, index) => {
      // const rotation = wrapIndex(rotations, index)
      const rotation =
        Math.abs(random.noise2D(...point, 0.05)) * random.range(0.99, 1.0)
      const path = getRotatedUnitLine(point, rotation * Math.PI * 2)
      paths.push(path)
    })
    // const path1 = [[0, 0], [1, 1]]
    // const path2 = [[3, 3], [4, 4]]
    // const paths = [path1, path2]

    return props => {
      return renderPaths(paths, props)
    }
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="sideways" />
