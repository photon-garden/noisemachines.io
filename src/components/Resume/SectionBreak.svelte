<script>
  import Row from "./Row.svelte"
  export let name
</script>

<style>
  .section-break {
    margin-top: 28px;
  }

  :global(.section-break .row) {
    align-items: center;
  }

  .name {
    color: var(--brand-color);
    text-transform: uppercase;
    font-size: 27px;
  }

  hr {
    width: var(--right-column-width);
    margin: 0;

    color: var(--brand-color);
    height: 0;
    border: 0;
    border-top: 2px solid var(--brand-color);
  }
</style>

<div class="section-break">
  <Row>
    <span slot="left-column" class="name">{name}</span>
    <hr slot="right-column" />
  </Row>
</div>
