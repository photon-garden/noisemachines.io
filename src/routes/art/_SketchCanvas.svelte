<script>
  import { onMount } from "svelte"
  import canvasSketch from "canvas-sketch"
  import sleep from "./_helpers/sleep"
  import { getMetadata } from "./[id].json.js"

  export let settings
  export let sketch
  export let artworkId

  const artworkMetadata = getMetadata(artworkId)

  let canvas
  let loading = true

  onMount(async () => {
    settings.canvas = canvas
    await canvasSketch(sketch, settings)
    await sleep(0) // Required to get the CSS transition to work for some reason.

    loading = false
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
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .loading {
    opacity: 0;
    transform: translateY(-4px);
  }
</style>

<div class="sketch-canvas-container">
  <canvas class:loading bind:this={canvas} />
</div>
