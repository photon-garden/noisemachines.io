import * as MarchingSquares from 'marchingsquares'
import { smoothPointsRecursively } from './smooth'

const smoothLineCollection = smoothingIterations => lineCollection =>
  lineCollection.map(line => smoothPointsRecursively(line, smoothingIterations))

export default (points, thresholds, smoothingIterations = 0) => {
  let lineCollections = MarchingSquares.isoLines(points, thresholds)
  lineCollections = lineCollections.map(
    smoothLineCollection(smoothingIterations)
  )

  return lineCollections
}
