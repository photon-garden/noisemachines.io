<script>
  import kebabCase from "kebab-case"
  export let variables

  let cssVariables = ""
  // const cssVariables = `--window-light: ${windowLight}; --window-medium: ${windowMedium}; --window-dark: ${windowDark}; --dark-text: ${darkText}; --text: ${text}; --sky: ${skyFillStyle}; --sky-margin: ${skyMargin};`

  Object.entries(variables).forEach(([variableName, value]) => {
    const kebabed = kebabCase(variableName)
    cssVariables += `--${kebabed}: ${value}; `
  })
</script>

<div style={cssVariables}>
  <slot />
</div>
