<script context="module">
  import * as themeColors from "./_themeColors"
  export const colors = themeColors
</script>

<script>
  import CssVariablesWrapper from "./CssVariablesWrapper.svelte"
</script>

<CssVariablesWrapper variables={colors}>
  <slot />
</CssVariablesWrapper>
