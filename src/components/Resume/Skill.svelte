<script>
  import Row from "./Row.svelte"
  export let category
  export let list
</script>

<style>
  .skill {
    margin-top: 20px;
  }

  .skill-category {
    color: var(--dark-text);
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
  }

  .skill-list {
    columns: 2;
    margin-top: 0;
    height: 120px;
    padding-left: 17px;
  }
</style>

<div class="skill">
  <Row>
    <div slot="left-column">
      <span class="skill-category">{category}</span>
    </div>
    <div slot="right-column">
      <ul class="skill-list">
        {#each list as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  </Row>
</div>
