import * as animatedNoisyHatchedCircles from './animated-noisy-hatched-circles.svelte'
import * as dotGrid from './dot-grid.svelte'
import * as noisyClippedIsoLines from './noisy-clipped-iso-lines.svelte'
import * as noisyHatchedCircles from './noisy-hatched-circles.svelte'
import * as sideways from './sideways.svelte'
import * as smoothedNoisyIsoLines from './smoothed-noisy-iso-lines.svelte'
import * as smoothedPolylines from './smoothed-polylines.svelte'

const artPieces = {
  'animated-noisy-hatched-circles': animatedNoisyHatchedCircles,
  'dot-grid': dotGrid,
  'noisy-clipped-iso-lines': noisyClippedIsoLines,
  'noisy-hatched-circles': noisyHatchedCircles,
  sideways: sideways,
  'smoothed-noisy-iso-lines': smoothedNoisyIsoLines,
  'smoothed-polylines': smoothedPolylines
}

export default artPieces
