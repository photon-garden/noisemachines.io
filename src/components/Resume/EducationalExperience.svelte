<script>
  import Row from "./Row.svelte"
  export let educationalExperience
</script>

<style>
  .educational-experience {
    margin-top: 20px;
  }

  .institution {
    font-size: 15px;
  }

  .institution-name {
    color: var(--dark-text);
    font-weight: bold;
  }

  .location {
    font-style: italic;
  }

  .name {
    font-weight: bold;
    text-transform: uppercase;
  }

  .detail {
    font-style: italic;
  }
</style>

<div class="educational-experience">
  <Row>
    <div slot="left-column" class="institution">
      <div class="institution-name">
        {educationalExperience.institutionName}
      </div>
      <div class="location">{educationalExperience.location}</div>
    </div>
    <div slot="right-column">
      {#each educationalExperience.qualifications as qualification}
        <div class="qualification">
          <div class="name">{qualification.name}</div>
          <div class="detail">{qualification.detail}</div>
        </div>
      {/each}
    </div>
  </Row>
</div>
