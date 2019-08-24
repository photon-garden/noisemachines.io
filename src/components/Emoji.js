import React from 'react'

export default ({ children, label }) => (
  <span role='img' aria-label={label}>
    {children}
  </span>
)
