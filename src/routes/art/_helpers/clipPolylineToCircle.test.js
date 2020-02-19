import test from 'ava'
import clipPolylineToCircle from './clipPolylineToCircle'

test("should return a polyline unchanged if it's completely in the circle", t => {
  const polyline = [
    [0, 0],
    [0, 0.5],
    [0.5, 0]
  ]
  const center = [0, 0]
  const radius = 1
  const clipped = clipPolylineToCircle(polyline, center, radius)
  console.log({ clipped })
  console.log({ polyline })
  t.deepEqual(clipped, polyline)
})
