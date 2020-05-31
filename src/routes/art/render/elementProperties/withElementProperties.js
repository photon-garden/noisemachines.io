function runMiddlewaresAndRender (middlewares, props, element, index = 0) {
  const middleware = middlewares[index]
  if (!middleware) return

  const cleanup = middleware(props, element)
  runMiddlewaresAndRender(middlewares, props, element, index + 1)
  if (cleanup) {
    cleanup()
  }
}

function warnMissingProperties (render, expectedKeys, element) {
  for (const key of expectedKeys) {
    if (element[key] === undefined) {
      const message = `The ${render.name} renderer has a transform for the ${key} property, but there was an element that didn't have it. Set ${key} to null to suppress this message.`
      console.groupCollapsed(message)
      console.log("Here's the element 👇")
      console.dir(element)
      console.trace("And here's a stack trace 👇")
      console.groupEnd()

      return false
    }
  }

  return true
}

function withMiddleware (middleware, render) {
  const expectedElementKeys = Object.keys(middleware)
  const middlewares = Object.values(middleware)
  middlewares.push(render)

  return function renderWithMiddleware (props, element) {
    warnMissingProperties(render, expectedElementKeys, element)
    runMiddlewaresAndRender(middlewares, props, element)
  }
}

export default withMiddleware
