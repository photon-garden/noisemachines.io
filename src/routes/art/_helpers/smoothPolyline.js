import { lerp } from 'canvas-sketch-util/math'

const lerpPoints = ([ax, ay], [bx, by], t) => {
  const lerped = []
  lerped[0] = lerp(ax, bx, t)
  lerped[1] = lerp(ay, by, t)
  return lerped
}

const getCut = (i, polyline, closed, ratio) => {
  const a = polyline[i]
  const b = polyline[i + 1]

  if (ratio > 0.5) ratio = 1 - ratio

  const cut = [lerpPoints(a, b, ratio), lerpPoints(b, a, ratio)]

  if (!closed && i === 0) {
    cut[0] = a
  }

  if (!closed && i === polyline.length - 2) {
    cut[1] = b
  }

  return cut
}

const isClosed = polyline => {
  const first = polyline[0]
  const last = polyline[polyline.length - 1]
  return first[0] === last[0] && first[1] === last[1]
}

export default (polyline, ratio = 0.25) => {
  const closed = isClosed(polyline)
  let cuts = []

  for (let i = 0; i < polyline.length - 1; i++) {
    const cut = getCut(i, polyline, closed, ratio)
    cuts = cuts.concat(cut)
  }

  if (closed) {
    cuts.push(cuts[0])
  }

  return cuts
}
