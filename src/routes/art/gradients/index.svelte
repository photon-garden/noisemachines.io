<script context="module">
  import random from "canvas-sketch-util/random"
  import math from "canvas-sketch-util/math"
  import PixelMatrix from "@noise-machines/pixel-matrix"
  import SketchCanvas from "../_SketchCanvas.svelte"
  import colorHunt from "../_helpers/colorHunt.js"
  import isBrowser from "../_helpers/isBrowser.js"
  import * as interpolationStrategies from "./_interpolationStrategies.js"
  import wrapIndex from "../_helpers/wrapIndex.js"
  import getGridWithMargin from "../_helpers/getGridWithMargin.js"
  import noisePick2D from "../_helpers/noisePick2D.js"
  import getRandomWalker from "../_helpers/getRandomWalker.js"

  export const settings = {
    dimensions: [25, 25],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "cm",
    pixelated: true,
    animate: isBrowser,
    data: {
      pixelsToRenderPerFrame: 3000,
      // seed: 8895, // watermelon
      // seed: 12, // light yellow and green
      seed: 1,
      palette: ["#B9CCED", "#F6E7E6", "#FBF4F9", "#F6E5F5"],
      interpolationStrategy: interpolationStrategies.rgba,
      gradientStopDensity: 4,
      maxDistanceScale: 0.5
    }
  }

  const getDistance = (a, b) => {
    const distance = Math.hypot(a.x - b.x, a.y - b.y)
    return distance
  }

  const getStopsWithCloseness = (gradientStops, point, maxDistance) => {
    let totalCloseness = 0

    const stopsWithCloseness = []
    for (const stop of gradientStops) {
      let closeness = maxDistance - getDistance(point, stop.point)
      if (closeness <= 0) {
        continue
      }

      closeness *= closeness * closeness
      totalCloseness += closeness

      stopsWithCloseness.push({
        ...stop,
        closeness
      })
    }

    return [stopsWithCloseness, totalCloseness]
  }

  const interpolateStops = (gradientStops, point, maxDistance) => {
    const [stopsWithCloseness, totalCloseness] = getStopsWithCloseness(
      gradientStops,
      point,
      maxDistance
    )

    let interpolatedColor = [0, 0, 0]

    for (const stop of stopsWithCloseness) {
      const weight = stop.closeness / totalCloseness
      let index = 0
      for (const channel of stop.color) {
        const weightedChannel = channel * weight
        interpolatedColor[index] += weightedChannel
        index += 1
      }
    }

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

  const getGradientStops = (palette, pixels, density = 3) => {
    const [xs, ys] = getGridWithMargin(pixels.width, pixels.height, density, 0)

    const gradientStops = []

    const randomWalk = getRandomWalker(0, palette.length)

    for (const x of xs) {
      for (const y of ys) {
        // const color = wrapIndex(palette, colorIndex)
        // const color = noisePick2D(x, y, palette)
        const index = randomWalk()
        const color = palette[index]

        const stop = {
          color,
          point: { x, y }
        }

        gradientStops.push(stop)
      }
    }

    return gradientStops
  }

  const getMaxDistance = canvas =>
    getDistance({ x: 0, y: 0 }, { x: canvas.width, y: canvas.height })

  export const sketch = async props => {
    const { context, width, height, canvas, data, animate } = props
    if (data.seed) random.setSeed(data.seed)

    let palette
    if (data.palette) {
      palette = data.palette
    } else {
      palette = random.pick(colorHunt.trendy)
    }
    palette = palette.map(data.interpolationStrategy.toInterpolationSpace)

    const pixels = PixelMatrix.fromCanvas(canvas)
    const maxDistance = getMaxDistance(canvas) * data.maxDistanceScale
    const gradientStops = getGradientStops(
      palette,
      pixels,
      data.gradientStopDensity
    )

    const points = getPoints(pixels)

    const getGradientAt = point => {
      const color = interpolateStops(gradientStops, point, maxDistance)
      const newPixel = data.interpolationStrategy.toPixel(color)
      newPixel.alpha = 255
      return newPixel
    }

    const renderPointAtIndex = index => {
      const point = points[index]
      const pixel = getGradientAt(point)
      pixels.set(point, pixel)
    }

    const renderPixels = (startIndex, endIndex) => {
      for (let index = startIndex; index < endIndex; index++) {
        renderPointAtIndex(index)
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
