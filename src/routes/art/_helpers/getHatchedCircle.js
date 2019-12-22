import { piFourths } from './pi'
import { createHatchLines, clipLineToCircle } from 'canvas-sketch-util/geometry'

const getBoundsForCircle = ([x, y], r) => [[x - r, y - r], [x + r, y + r]]

export default (center, r, hatchAngle = piFourths, hatchSpacing = 0.09) => {
  const bounds = getBoundsForCircle(center, r)
  const hatches = createHatchLines(bounds, hatchAngle, hatchSpacing)
  const clippedHatches = hatches.map(hatch => {
    const clipped = []
    clipLineToCircle(...hatch, center, r, clipped)
    return clipped
  })
  return clippedHatches
}
