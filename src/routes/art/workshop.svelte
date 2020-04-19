<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import tome from "chromotome"

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
    const palette = tome.getRandom()

    return ({ context }) => {
      // Paint an off-white background.
      context.fillStyle = "hsl(39, 44%, 95%)"
      context.fillRect(0, 0, width, height)

      const colors = palette.colors

      const horizontalMargin = 5
      const verticalMargin = 3
      const totalHorizontalMargin = horizontalMargin * 2
      const totalVerticalMargin = verticalMargin * 2

      const availableWidth = width - totalHorizontalMargin
      const availableHeight = height - totalVerticalMargin

      const rectangleWidth = availableWidth / colors.length
      const rectangleHeight = availableHeight

      colors.forEach((color, index) => {
        context.fillStyle = color
        const x = horizontalMargin + rectangleWidth * index
        const y = verticalMargin
        context.fillRect(x, y, rectangleWidth, rectangleHeight)
      })
    }
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="sideways" />
