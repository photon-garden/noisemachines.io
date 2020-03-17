import * as animatedNoisyHatchedCircles from './animated-noisy-hatched-circles.svelte'
import * as dotGrid from './dot-grid.svelte'
import * as noisyClippedIsoLines from './noisy-clipped-iso-lines.svelte'
import * as noisyHatchedCircles from './noisy-hatched-circles.svelte'
import * as sideways from './sideways.svelte'
import * as smoothedNoisyIsoLines from './smoothed-noisy-iso-lines.svelte'
import * as smoothedPolyline from './smoothed-polyline.svelte'

const artPieces = {
  'animated-noisy-hatched-circles': animatedNoisyHatchedCircles,
  'dot-grid': dotGrid,
  'noisy-clipped-iso-lines': noisyClippedIsoLines,
  'noisy-hatched-circles': noisyHatchedCircles,
  sideways: sideways,
  'smoothed-noisy-iso-lines': smoothedNoisyIsoLines,
  'smoothed-polyline': smoothedPolyline
}

export default artPieces
