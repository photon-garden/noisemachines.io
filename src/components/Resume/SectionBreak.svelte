<script>
  export let name
</script>

<style>
  .name {
    color: var(--brand-color);
    text-transform: uppercase;
    font-size: 27px;
  }

  hr {
    width: 831px;
    display: inline-block;
    color: var(--brand-color);
    border: 0;
    height: 0;
    border-top: 2px solid var(--brand-color);
  }
</style>

<div class="section-break">
  <span class="name">{name}</span>
  <hr />
</div>
