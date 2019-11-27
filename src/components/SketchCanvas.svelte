<script>
  export let settings
  export let sketch
  import { onMount } from "svelte"
  import canvasSketch from "canvas-sketch"
  let canvas
  onMount(() => {
    settings.canvas = canvas
    canvasSketch(sketch, settings)
  })
</script>

<style>
  .sketch-canvas-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  canvas {
    margin: auto;
    display: block;
    box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.15);
  }
</style>

<div class="sketch-canvas-container">
  <canvas bind:this={canvas} />
</div>
