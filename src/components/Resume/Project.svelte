<script>
  import Row from "./Row.svelte"
  export let project
</script>

<style>
  .project {
    margin-top: 20px;
  }
  .project-name {
    font-weight: bold;
  }
</style>

<div class="project">
  <Row>
    <div slot="right-column">
      <span class="project-name">{project.name}:</span>
      {project.description}
    </div>
  </Row>
</div>
