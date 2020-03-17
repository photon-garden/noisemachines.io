const capitalize = string => string[0].toUpperCase() + string.slice(1)

export const getId = fileName => fileName.replace('.svelte', '')

export const getMetadata = id => {
  const name = id
    .split('-')
    .map(capitalize)
    .join(' ')

  return {
    name,
    url: `/art/${id}`,
    previewUrl: `/art/${id}/preview`,
    id
  }
}

export const getMetadataForFileName = fileName => {
  const id = getId(fileName)
  return getMetadata(id)
}

export async function get (req, res, next) {
  const metadata = getMetadata(req.params.id)
  return res.end(JSON.stringify(metadata))
}
