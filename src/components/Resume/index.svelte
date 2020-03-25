<script>
  import CssVariablesWrapper from "../CssVariablesWrapper.svelte"
  import Header from "./Header.svelte"
  import SectionBreak from "./SectionBreak.svelte"
  import Position from "./Position.svelte"
  import Project from "./Project.svelte"
  import Skills from "./Skills.svelte"
  import EducationalExperience from "./EducationalExperience.svelte"

  const variables = {
    brandColor: "#78c8cc",
    background: "#ffffff",

    whiteText: "#fffffe",
    lightText: "#7c7c7b",
    text: "#434342",
    darkText: "#40403f",

    width: "1260px",
    leftColumnWidth: "337px",
    rightColumnWidth: "833px"
  }

  export let person
</script>

<style>
  .page {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .container {
    max-width: var(--width);
    box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.25);
    margin-top: 50px;
    margin-bottom: 50px;
    padding-bottom: 42px;
  }
</style>

<CssVariablesWrapper {variables}>
  <div class="page">
    <div class="container">
      <Header {person} />
      <SectionBreak name={'experience'} />
      {#each person.positions as position}
        <Position {position} />
      {/each}

      <SectionBreak name={'projects'} />
      {#each person.projects as project}
        <Project {project} />
      {/each}

      <SectionBreak name={'skills'} />
      <Skills skills={person.skills} />

      <SectionBreak name={'education'} />
      {#each person.educationalExperiences as educationalExperience}
        <EducationalExperience {educationalExperience} />
      {/each}

    </div>
  </div>
</CssVariablesWrapper>
