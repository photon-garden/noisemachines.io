<script>
  import SketchCanvas from "../../components/SketchCanvas.svelte"
  import { renderPaths } from "canvas-sketch-util/penplot"
  import { smoothPoints } from "./_helpers/smooth"

  const settings = {
    dimensions: [1, 1],
    orientation: "portrait",
    pixelsPerInch: 1000,
    scaleToView: true,
    units: "cm"
  }

  const sketch = props => {
    const { width, height } = props
    const cx = width / 2
    const cy = height / 2
    const center = [cx, cy]
    const line = [
      [cx, cy + height / 4],
      [cx + width / 4, cy],
      [cx, cy - height / 4],
      [cx - width / 4, cy]
      // [cx, cy + height / 4]
    ]
    const smoothed = smoothPoints(line, 0.25)
    // const smoothed = line

    const lines = [smoothed]

    return props => renderPaths(lines, props)
  }
</script>

<SketchCanvas {sketch} {settings} />
