<script>
  import LeftColumn from "./LeftColumn.svelte"
  export let name
</script>

<style>
  .section-break {
    display: flex;
    align-items: center;
    margin-top: 28px;
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
  <LeftColumn>
    <span class="name">{name}</span>
  </LeftColumn>
  <hr />
</div>
