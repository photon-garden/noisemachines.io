import { get as getWithDimensions } from './preview/[dimensions].js'

export async function get (request, response) {
  request.params.dimensions = '300x300'
  return getWithDimensions(request, response)
}
