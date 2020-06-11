import dot from './dot'
import line from './line'

export const elementProperties = {}

export function render (props, graph) {
  for (const edge of graph.edges()) {
    const start = graph.node(edge.v)
    const end = graph.node(edge.w)

    const element = {
      ...start,
      points: [start.point, end.point]
    }

    line(props, element)
  }
}

export default render
