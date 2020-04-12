<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import niceColors from "./_helpers/niceColors.js"
  import random from "canvas-sketch-util/random"
  import PixelMatrix from "@noise-machines/pixel-matrix"
  import Color from "canvas-sketch-util/color"

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 10,
    scaleToView: true,
    units: "cm",
    pixelated: true,
    animate: true,
    data: {}
  }

  const toPixel = hex => {
    const [red, green, blue, alpha] = Color.parse(hex).rgba
    return {
      red,
      green,
      blue,
      alpha: 255
    }
  }

  export const sketch = props => {
    const { context, width, height, canvas } = props
    const palette = random.pick(niceColors).map(toPixel)

    const pixels = PixelMatrix.fromCanvas(canvas)
    return props => {
      // pixels.map(() => random.pick(palette)).putPixels(canvas)

      const point = pixels.getRandomPoint()
      const randomColor = random.pick(palette)
      pixels.set(point, randomColor)
      pixels.putPixels(canvas)
    }
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="dot-grid" />
