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

    width: "612px",
    leftColumnWidth: "146px",
    rightColumnWidth: "374px"
  }

  export let person
</script>

<style>
  @font-face {
    font-family: "BebasNeueBold";
    src: url("../fonts/BebasNeue/BebasNeue-Bold.otf") format("otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "BebasNeueBook";
    src: url("../fonts/BebasNeue/BebasNeue-Book.otf") format("otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "BebasNeueLight";
    src: url("../fonts/BebasNeue/BebasNeue-Light.otf") format("otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "BebasNeueRegular";
    src: url("../fonts/BebasNeue/BebasNeue-Regular.otf") format("otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "BebasNeueThin";
    src: url("../fonts/BebasNeue/BebasNeue-Thin.otf") format("otf");
    font-weight: normal;
    font-style: normal;
  }

  .page {
    width: 100vw;
    display: flex;
    justify-content: center;
    transform: scale(2) translate(0, 25%);
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
