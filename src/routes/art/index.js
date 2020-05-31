// import * as animatedNoisyHatchedCircles from './animated-noisy-hatched-circles.svelte'
// import * as dotGrid from './dot-grid.svelte'
// import * as isoCircle from './iso-circle.svelte'
// import * as noisyHatchedCircles from './noisy-hatched-circles.svelte'
// import * as sideways from './sideways.svelte'
// import * as smoothedNoisyIsoLines from './smoothed-noisy-iso-lines.svelte'
// import * as smoothedPolylines from './smoothed-polylines.svelte'
// import * as gradients from './gradients/index.svelte'

const artPieces = {
  'animated-noisy-hatched-circles': {
    modulePromise: import('./animated-noisy-hatched-circles.svelte'),
    path: './animated-noisy-hatched-circles.svelte'
  },
  'dot-grid': {
    modulePromise: import('./dot-grid.svelte'),
    path: './dot-grid.svelte'
  },
  'iso-circle': {
    modulePromise: import('./iso-circle.svelte'),
    path: './iso-circle.svelte'
  },
  'noisy-hatched-circles': {
    modulePromise: import('./noisy-hatched-circles.svelte'),
    path: './noisy-hatched-circles.svelte'
  },
  sideways: {
    modulePromise: import('./sideways.svelte'),
    path: './sideways.svelte'
  },
  'smoothed-noisy-iso-lines': {
    modulePromise: import('./smoothed-noisy-iso-lines.svelte'),
    path: './smoothed-noisy-iso-lines.svelte'
  },
  'smoothed-polylines': {
    modulePromise: import('./smoothed-polylines.svelte'),
    path: './smoothed-polylines.svelte'
  },
  gradients: {
    modulePromise: import('./gradients/index.svelte'),
    path: './gradients/index.svelte'
  }
}

export default artPieces
