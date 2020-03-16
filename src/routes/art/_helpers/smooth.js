import { lerp } from 'canvas-sketch-util/math'

const lerpPoints = ([ax, ay], [bx, by], t) => {
  const lerped = []
  lerped[0] = lerp(ax, bx, t)
  lerped[1] = lerp(ay, by, t)
  return lerped
}

const getCut = (i, points, closed, ratio) => {
  const a = points[i]
  const b = points[i + 1]

  if (ratio > 0.5) ratio = 1 - ratio

  const cut = [lerpPoints(a, b, ratio), lerpPoints(b, a, ratio)]

  if (!closed && i === 0) {
    cut[0] = a
  }

  if (!closed && i === points.length - 2) {
    cut[1] = b
  }

  return cut
}

const isClosed = points => {
  const first = points[0]
  const last = points[points.length - 1]
  return first[0] === last[0] && first[1] === last[1]
}

export const smoothPoints = (points, ratio = 0.25) => {
  const closed = isClosed(points)
  let cuts = []

  for (let i = 0; i < points.length - 1; i++) {
    const cut = getCut(i, points, closed, ratio)
    cuts = cuts.concat(cut)
  }

  if (closed) {
    cuts.push(cuts[0])
  }

  return cuts
}

export const smoothPointsRecursively = (points, recursionCount = 1) => {
  let smoothed = points

  for (let i = 0; i < recursionCount; i++) {
    smoothed = smoothPoints(smoothed)
  }

  return smoothed
}
