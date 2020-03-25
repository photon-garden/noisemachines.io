<script>
  import Header from "./Header.svelte"
  import SectionBreak from "./SectionBreak.svelte"
  import CssVariablesWrapper from "../CssVariablesWrapper.svelte"

  const variables = {
    brandColor: "#78c8cc",
    background: "#ffffff",

    whiteText: "#fffffe",
    lightText: "#7c7c7b",
    text: "#434342",
    darkText: "#40403f",

    width: "1260px"
  }

  export let person
</script>

<style>
  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .container {
    max-width: var(--width);
    box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.25);
    margin-top: 50px;
  }
</style>

<CssVariablesWrapper {variables}>
  <div class="page">
    <div class="container">
      <Header {person} />
      <SectionBreak name={'experience'} />
    </div>
  </div>
</CssVariablesWrapper>
