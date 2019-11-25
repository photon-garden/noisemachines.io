<script>
  import { onMount } from "svelte"
  let canvas

  export let draw
  export let width
  export let height

  onMount(() => {
    const context = canvas.getContext("2d")
    draw(context)
  })
</script>

<canvas bind:this={canvas} {width} {height} />
