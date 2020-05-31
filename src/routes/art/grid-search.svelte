<script context="module">
  import SketchCanvas from "./_SketchCanvas.svelte"
  import renderDot from "./render/dot"

  export const settings = {
    dimensions: [500, 500],
    orientation: "portrait",
    scaleToView: true
  }

  export function sketch(props) {
    const element = {
      point: [0.5, 0.5],
      fillStyles: ["red"],
      strokeStyle: "black",
      lineWidth: 0.09,
      size: 0.1
    }

    return function render() {
      renderDot(props, element)
    }
  }
</script>

<SketchCanvas {sketch} {settings} />
