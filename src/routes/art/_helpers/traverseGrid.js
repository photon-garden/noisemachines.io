import withIndex from './withIndex'

export default function * traverseGrid (grid) {
  for (const [column, columnIndex] of withIndex(grid)) {
    for (const [element, rowIndex] of withIndex(column)) {
      yield [element, columnIndex, rowIndex]
    }
  }
}
