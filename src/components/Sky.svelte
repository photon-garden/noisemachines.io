<script>
  import { onMount } from "svelte"
  let canvas

  export let width
  export let height
  export let fillStyle

  onMount(() => {
    const context = canvas.getContext("2d")
    context.fillStyle = fillStyle
    context.fillRect(0, 0, canvas.width, canvas.height)
  })
</script>

<canvas bind:this={canvas} class="sky" {width} {height} />
