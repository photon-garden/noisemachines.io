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
    module: import('./animated-noisy-hatched-circles.svelte'),
    path: './animated-noisy-hatched-circles.svelte'
  },
  'dot-grid': {
    module: import('./dot-grid.svelte'),
    path: './dot-grid.svelte'
  },
  'iso-circle': {
    module: import('./iso-circle.svelte'),
    path: './iso-circle.svelte'
  },
  'noisy-hatched-circles': {
    module: import('./noisy-hatched-circles.svelte'),
    path: './noisy-hatched-circles.svelte'
  },
  sideways: {
    module: import('./sideways.svelte'),
    path: './sideways.svelte'
  },
  'smoothed-noisy-iso-lines': {
    module: import('./smoothed-noisy-iso-lines.svelte'),
    path: './smoothed-noisy-iso-lines.svelte'
  },
  'smoothed-polylines': {
    module: import('./smoothed-polylines.svelte'),
    path: './smoothed-polylines.svelte'
  },
  gradients: {
    module: import('./gradients/index.svelte'),
    path: './gradients/index.svelte'
  }
}

export default artPieces
