<script>
  import Row from "./Row.svelte"
  export let position
</script>

<style>
  .position {
    margin-top: 20px;
  }

  .job-title {
    text-transform: uppercase;
    color: var(--dark-text);
    font-size: 15px;
    font-weight: bold;
  }

  .employer-and-location {
    color: var(--light-text);
  }

  .location {
    font-style: italic;
  }
</style>

<div class="position">
  <Row>
    <span slot="left-column" class="job-title">{position.jobTitle}</span>
    <div slot="right-column">
      <div class="employer-and-location">
        {position.employer} ‒
        <span class="location">{position.location}</span>
      </div>
      <div class="description">{position.description}</div>
    </div>
  </Row>
</div>
