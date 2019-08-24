import React from 'react'

export default props => {
  if (typeof window === 'undefined') {
    return null
  }
  return (
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
}
