<script>
  import LeftColumn from "./LeftColumn.svelte"
  import RightColumn from "./RightColumn.svelte"
  export let position
</script>

<style>
  .position {
    margin-top: 20px;
    display: flex;
  }

  .job-title {
    text-transform: uppercase;
    color: var(--dark-text);
    font-size: 12px;
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
  <LeftColumn>
    <span class="job-title">{position.jobTitle}</span>
  </LeftColumn>
  <RightColumn>
    <div class="employer-and-location">
      {position.employer} ‒
      <span class="location">{position.location}</span>
    </div>
    <div class="description">{position.description}</div>
  </RightColumn>
</div>
