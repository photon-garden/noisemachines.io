import chroma from 'chroma-js'

export const lch = {
  toInterpolationSpace (hex) {
    return chroma(hex).lch()
  },
  toPixel (lch) {
    const [red, green, blue, alpha] = chroma.lch(lch).rgba()
    return {
      red,
      green,
      blue,
      alpha: alpha * 255
    }
  }
}

export const rgba = {
  toInterpolationSpace (hex) {
    return chroma(hex).rgba()
  },
  toPixel ([red, green, blue, alpha]) {
    return {
      red,
      green,
      blue,
      alpha: alpha * 255
    }
  }
}
