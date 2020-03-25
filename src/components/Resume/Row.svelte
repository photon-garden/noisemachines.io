<style>
  .row {
    display: flex;
  }

  .left-column {
    width: var(--left-column-width);
    display: flex;
    justify-content: flex-end;
    margin-right: 55px;
  }

  :global(.left-column > *) {
    text-align: right;
    text-transform: uppercase;
    white-space: pre-line;
  }

  .right-column {
    width: 833px;
  }
</style>

<div class="row">
  <div class="left-column">
    <slot name="left-column" />
  </div>

  <div class="right-column">
    <slot name="right-column" />
  </div>
</div>
