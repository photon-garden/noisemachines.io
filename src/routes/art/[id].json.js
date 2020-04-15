const capitalize = string => string[0].toUpperCase() + string.slice(1)

export const getId = path => {
  const split = path.split('/')
  const last = split[split.length - 1]
  if (last === 'index.svelte') {
    const nextToLast = split[split.length - 2]
    return nextToLast
  } else {
    return last.replace('.svelte', '')
  }
}

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

export const getMetadataForPath = path => {
  const id = getId(path)
  return getMetadata(id)
}

export async function get (req, res, next) {
  const metadata = getMetadata(req.params.id)
  return res.end(JSON.stringify(metadata))
}
