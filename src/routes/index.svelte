<script>
  import ImpossibleWindow from "../components/ImpossibleWindow.svelte"
  import Emoji from "../components/Emoji.svelte"
  import Theme, { colors } from "../components/Theme.svelte"
</script>

<style>
  @media (min-width: 1280px) {
    .art-container {
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

  @media (max-width: 1280px) {
    .art-container {
      margin-bottom: 120px;
    }
  }
</style>

<svelte:head>
  <title>Thomas Bailey</title>
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
          I co-founded
          <a href="https://datajoy.co">Datajoy</a>
          and
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
