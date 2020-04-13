import * as animatedNoisyHatchedCircles from './animated-noisy-hatched-circles.svelte'
import * as dotGrid from './dot-grid.svelte'
import * as isoCircle from './iso-circle.svelte'
import * as noisyHatchedCircles from './noisy-hatched-circles.svelte'
import * as sideways from './sideways.svelte'
import * as smoothedNoisyIsoLines from './smoothed-noisy-iso-lines.svelte'
import * as smoothedPolylines from './smoothed-polylines.svelte'
import * as gradients from './gradients/index.svelte'

const artPieces = {
  'animated-noisy-hatched-circles': animatedNoisyHatchedCircles,
  'dot-grid': dotGrid,
  'iso-circle': isoCircle,
  'noisy-hatched-circles': noisyHatchedCircles,
  sideways: sideways,
  'smoothed-noisy-iso-lines': smoothedNoisyIsoLines,
  'smoothed-polylines': smoothedPolylines,
  gradients
}

export default artPieces
