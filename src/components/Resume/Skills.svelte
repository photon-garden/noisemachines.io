<script>
  import Row from "./Row.svelte"
  import Skill from "./Skill.svelte"

  export let skills
  const categories = Object.keys(skills)
</script>

<div class="skills">
  {#each categories as category}
    <Skill {category} list={skills[category]} />
  {/each}
</div>
