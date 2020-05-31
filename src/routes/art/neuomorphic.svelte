<script>

</script>

<style>
  :root {
    --background-color: hsla(333, 8%, 94%, 1);
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--background-color);
  }

  .shape {
    width: 500px;
    height: 500px;
    background-color: var(--background-color);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: -6px -6px 26px 0 rgba(255, 255, 255, 0.83),
      6px 6px 16px 0 rgba(217, 210, 200, 0.51);
  }
</style>

<div class="container">
  <div class="shape" />
</div>
