export default function * withIndex (elements) {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index]
    yield [element, index]
  }
}
