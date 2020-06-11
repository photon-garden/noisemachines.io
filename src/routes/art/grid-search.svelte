<script context="module">
  import { Graph } from "graphlib"
  import SketchCanvas from "./_SketchCanvas.svelte"
  import renderGraph from "./render/graph"
  import getGrid from "./_helpers/getGrid"
  import getNeighbors from "./_helpers/getNeighbors"
  import traverseGrid from "./_helpers/traverseGrid"
  import renderLine from "./render/line"

  export const settings = {
    dimensions: [500, 500],
    orientation: "portrait",
    scaleToView: true,
    data: {
      density: 5
    }
  }

  let id = -1
  function getDot(point) {
    id++
    return {
      id,
      point,
      fillStyles: ["black"],
      strokeStyle: "black",
      lineWidth: 0.01,
      size: 0.02
    }
  }

  export function sketch(props) {
    const grid = getGrid({ ...props, width: 1, height: 1 })
    const dotGrid = grid.points.map(column => column.map(getDot))
    const dots = dotGrid.flat()
    const graph = new Graph({ directed: false })

    for (const [dot, xIndex, yIndex] of traverseGrid(dotGrid)) {
      graph.setNode(dot.id, dot)
      for (const neighbor of getNeighbors(dotGrid, xIndex, yIndex)) {
        graph.setEdge(dot.id, neighbor.id)
      }
    }

    return function render() {
      const start = [0, 1]
      const end = [1, 0]
      const line = {
        points: [start, end],
        strokeStyle: "black",
        lineWidth: 0.01
      }
      // renderLine(props, line)
      renderGraph(props, graph)
    }
  }
</script>

<SketchCanvas {sketch} {settings} />
