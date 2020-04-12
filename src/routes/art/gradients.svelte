<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import colorHunt from "./_helpers/colorHunt.json"
  import random from "canvas-sketch-util/random"
  import PixelMatrix from "@noise-machines/pixel-matrix"
  import chroma from "chroma-js"
  import isBrowser from "./_helpers/isBrowser.js"

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    pixelated: true,
    animate: false,
    data: {
      pixelsToRenderPerFrame: 3000
    }
  }

  const toLch = color => chroma(color).lch()

  const toPixel = lch => {
    const [red, green, blue, alpha] = chroma.lch(lch).rgba()
    return {
      red,
      green,
      blue,
      alpha: alpha * 255
    }
  }

  const getDistance = (a, b) => {
    const distance = Math.hypot(a.x - b.x, a.y - b.y)
    return distance
  }

  const getStopsWithCloseness = (gradientStops, point, maxDistance) => {
    let totalCloseness = 0

    const stopsWithCloseness = gradientStops.map(stop => {
      const closeness = maxDistance - getDistance(point, stop.point)
      totalCloseness += closeness

      return {
        ...stop,
        closeness
      }
    })

    return [stopsWithCloseness, totalCloseness]
  }

  const interpolateStops = (gradientStops, point, maxDistance) => {
    const [stopsWithCloseness, totalCloseness] = getStopsWithCloseness(
      gradientStops,
      point,
      maxDistance
    )

    let interpolatedColor = [0, 0, 0]

    stopsWithCloseness.forEach(stop => {
      const weight = stop.closeness / totalCloseness
      stop.color.forEach((channel, index) => {
        const weightedChannel = channel * weight
        interpolatedColor[index] += weightedChannel
      })
    })

    return interpolatedColor
  }

  const getPoints = pixelMatrix => {
    const points = []
    for (let x = 0; x < pixelMatrix.width; x++) {
      for (let y = 0; y < pixelMatrix.height; y++) {
        points.push({ x, y })
      }
    }

    return points
  }

  export const sketch = async props => {
    const { context, width, height, canvas, data, animate } = props
    const maxDistance = getDistance({ x: 0, y: 0 }, { x: width, y: height })
    const palette = random.pick(colorHunt.trendy).map(toLch)

    const pixels = PixelMatrix.fromCanvas(canvas)
    const points = getPoints(pixels)

    const gradientStops = palette.map(color => {
      return {
        color,
        point: pixels.getRandomPoint()
      }
    })

    const getGradientAt = point => {
      const color = interpolateStops(gradientStops, point, maxDistance)
      const newPixel = toPixel(color)
      newPixel.alpha = 255
      return newPixel
    }

    const renderPixels = (startIndex, endIndex) => {
      for (let index = startIndex; index < endIndex; index++) {
        const point = points[index]
        const pixel = getGradientAt(point)
        pixels.set(point, pixel)
      }
      pixels.putPixels(canvas)
    }

    if (!settings.animate) {
      renderPixels(0, pixels.countPixels)
      return
    }

    let i = 0

    return () => {
      if (i >= pixels.countPixels) return

      // Don't go past the end of the pixels.
      const lastPixelIndex = pixels.countPixels - 1
      const max = Math.min(i + data.pixelsToRenderPerFrame, lastPixelIndex)

      renderPixels(i, max)
      i = max
    }
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="dot-grid" />
