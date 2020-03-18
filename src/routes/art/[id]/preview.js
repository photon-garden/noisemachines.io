import { get as getWithDimensions } from './preview/[dimensions].js'

export async function get (req, res) {
  req.params.dimensions = '300x300'
  return getWithDimensions(req, res)
}
