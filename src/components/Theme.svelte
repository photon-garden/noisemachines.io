<script context="module">
  import * as themeColors from "./_themeColors"
  export const colors = themeColors
</script>

<script>
  import CssVariablesWrapper from "./CssVariablesWrapper.svelte"
</script>

<style>
  :global(body) {
    margin: 0;
  }

  :global(ul) {
    list-style: none;
    margin: 15px 0 0;
    padding: 0;
  }

  :global(a) {
    color: var(--dark-text);
    font-family: apercu_medium, Arial, Helvetica, sans-serif;
    text-decoration: none;
  }

  :global(*) {
    font-size: 30px;
    font-family: apercu_regular, Arial, Helvetica, sans-serif;
    line-height: 30px;
    color: var(--text);
    font-weight: 400;
  }

  :global(h1) {
    font-size: 72px;
    line-height: 72px;
    margin: 0;
    color: var(--dark-text);
  }

  :global(main) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--window-light);
  }

  @media (max-width: 1280px) {
    :global(main) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @font-face {
    font-family: "apercu_bold_italic";
    src: url("../fonts/apercu-font-kit/apercu_bold_italic-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_bold_italic-webfont.woff")
        format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_bold";
    src: url("../fonts/apercu-font-kit/apercu_bold-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_bold-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_italic";
    src: url("../fonts/apercu-font-kit/apercu_italic-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_italic-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_light_italic";
    src: url("../fonts/apercu-font-kit/apercu_light_italic-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_light_italic-webfont.woff")
        format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_light";
    src: url("../fonts/apercu-font-kit/apercu_light-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_light-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_medium_italic";
    src: url("../fonts/apercu-font-kit/apercu_medium_italic-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_medium_italic-webfont.woff")
        format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_medium";
    src: url("../fonts/apercu-font-kit/apercu_medium-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_medium-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_mono_regular";
    src: url("../fonts/apercu-font-kit/apercu_mono-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_mono-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "apercu_regular";
    src: url("../fonts/apercu-font-kit/apercu_regular-webfont.woff2")
        format("woff2"),
      url("../fonts/apercu-font-kit/apercu_regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
</style>

<CssVariablesWrapper variables={colors}>
  <slot />
</CssVariablesWrapper>
