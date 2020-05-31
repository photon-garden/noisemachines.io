<script context="module">
  import SketchCanvas from "../_SketchCanvas.svelte"
  import random from "canvas-sketch-util/random"
  import math from "canvas-sketch-util/math"
  import { vec2 } from "gl-matrix"
  import eases from "eases"
  import LeafRender from "./LeafRender"
  import quadraticCurve from "./quadraticCurve"
  import getRandomPointNearLine from "./getRandomPointNearLine"

  export const settings = {
    dimensions: [1000, 1000],
    orientation: "portrait",
    pixelsPerInch: 300,
    scaleToView: true,
    units: "px",
    animate: true,
    loop: false,
    duration: 5,
    data: {
      backgroundColor: "white"
    }
  }

  const uniformSample = countSamples => math.linspace(countSamples, true)
  const sample = (countSamples, fn) => uniformSample(countSamples).map(fn)

  export function sketch(props) {
    const start = [0.15, 0.85]
    const end = [0.85, 0.15]
    const render = new LeafRender(props)

    // Compute the stem.
    const control = getRandomPointNearLine(start, end)
    const stem = quadraticCurve(start, control, end)
    const points = sample(50, stem)

    const renderSketch = ({ playhead }) => {
      render.clear()

      render.curve(stem)

      playhead = eases.expoOut(playhead)

      const endAngle = Math.PI / 4
      const startAngle = endAngle * 0.9

      render.ribs(points, startAngle, endAngle, playhead)
    }

    return renderSketch
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="leaves" />
