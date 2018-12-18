import React from 'react'

export default props => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor || 'black'
    }}
  >
    {props.demo}
  </div>
)
