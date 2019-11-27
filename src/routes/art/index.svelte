<script context="module">
  export async function preload() {
    const res = await this.fetch(`art.json`)
    const art = await res.json()
    return { art }
  }
</script>

<script>
  export let art
</script>

{#each art as piece}
  <a href={piece.url}>{piece.name}</a>
{/each}
