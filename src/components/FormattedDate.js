export default ({ dateTime }) => {
  let parsed
  if (dateTime instanceof Date) {
    parsed = dateTime
  } else {
    parsed = new Date(dateTime)
  }
  return parsed.toLocaleDateString()
}
