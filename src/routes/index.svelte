<script>
  import ImpossibleWindow from "../components/ImpossibleWindow.svelte"
  import Emoji from "../components/Emoji.svelte"
  import Theme, { colors } from "../components/Theme.svelte"
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

  :global(.impossible-window) {
    transform: rotate(45deg);
    overflow: hidden;
  }

  :global(.sky) {
    position: absolute;
    transform: translate(var(--sky-margin) + px, var(--sky-margin) + px);
  }

  :global(.window) {
    position: absolute;
  }

  @media (min-width: 1280px) {
    :global(.art-container) {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :global(.text-container) {
      position: absolute;
      left: 50vw;
    }
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

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Theme>
  <main>
    <div class="art-container">
      <ImpossibleWindow />
    </div>
    <div class="text-container">
      <h1>Hi, I'm Thomas.</h1>
      <ul>
        <li>
          <Emoji label="wave emoji">🌊</Emoji>
          I co-founded the band
          <a href="https://partialsband.com">Partials.</a>
        </li>
        <li>
          <Emoji label="leaf emoji">🍃</Emoji>
          I make
          <a href="/art">generative art.</a>
        </li>
        <li>
          <Emoji label="ladybug emoji">🐞</Emoji>
          These are my️
          <a href="/principles">principles.</a>
        </li>
      </ul>
    </div>
  </main>
</Theme>
