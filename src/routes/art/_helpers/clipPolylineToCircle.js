import { clipSegmentToCircle } from 'canvas-sketch-util/geometry'

const forEachSegment = (polyline, eacher) => {
  for (let i = 0; i < polyline.length - 1; i++) {
    const a = polyline[i]
    const b = polyline[i + 1]
    eacher(a, b, i)
  }
}

// Takes a polyline of the form [a, b, c, d] and expands it out to
// [
//  [a, b],
//  [b, c],
//  [c, d]
// ]
const expandSegments = polyline => {
  const expanded = []
  forEachSegment(polyline, (a, b) => {
    expanded.push([a, b])
  })
  return expanded
}

const collapseSegments = segments => {
  const flattened = segments.flat()
  const collapsed = flattened.filter((a, i) => {
    const b = flattened[i + 1]
    return a !== b
  })
  return collapsed
}

const isPointInCircle = (center, radius, point) => {
  const xDifference = point[0] - center[0]
  const yDifference = point[1] - center[1]
  const distance = Math.hypot(xDifference, yDifference)
  return distance <= radius
}

const isSegmentInSomeCircle = (center, radius) => segment =>
  segment.some(point => isPointInCircle(center, radius, point))

const clipSegmentToSomeCircle = (center, radius) => ([a, b]) => {
  const hits = []
  const didCollide = clipSegmentToCircle(a, b, center, radius, hits)
  if (didCollide) {
    return hits
  }
  return [a, b]
}

export default (polyline, center, radius) => {
  const isInCircle = isSegmentInSomeCircle(center, radius)
  const clipToCircle = clipSegmentToSomeCircle(center, radius)

  const segments = expandSegments(polyline)
  const newPolylines = []
  let newSegmentedPolyline = []
  for (const segment of segments) {
    if (isInCircle(segment)) {
      const clipped = clipToCircle(segment)
      newSegmentedPolyline.push(clipped)
    } else if (newSegmentedPolyline.length > 0) {
      const collapsed = collapseSegments(newSegmentedPolyline)
      newPolylines.push(collapsed)
      newSegmentedPolyline = []
    }
  }

  if (newSegmentedPolyline.length > 0) {
    const collapsed = collapseSegments(newSegmentedPolyline)
    newPolylines.push(collapsed)
    newSegmentedPolyline = []
  }

  return newPolylines
}
