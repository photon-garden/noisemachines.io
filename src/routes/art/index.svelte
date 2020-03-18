<script context="module">
  export async function preload() {
    const res = await this.fetch(`art.json`)
    const pieces = await res.json()

    const size = 250
    const piecesWithDimensions = pieces.map(piece => {
      return {
        ...piece,
        width: size,
        height: size,
        previewUrl: piece.previewUrl + `/${size}x${size}`
      }
    })

    return { pieces: piecesWithDimensions }
  }
</script>

<script>
  export let pieces
</script>

<style>
  .preview {
    box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.15);
  }

  .container {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 900px;
  }

  li {
    margin: 15px;
  }
</style>

<div class="container">
  <ul>
    {#each pieces as piece}
      <li>
        <a href={piece.url}>
          <img
            class="preview"
            style={`width: ${piece.width}px; height: ${piece.height}px;`}
            alt="{piece.name} preview"
            src={piece.previewUrl} />
        </a>
      </li>
    {/each}
  </ul>
</div>
