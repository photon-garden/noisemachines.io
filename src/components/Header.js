import React from 'react'

export default ({ title, author }) => {
  return (
    <header id="header">
      <h1>
        <a href="index.html">
          {title} <span>by {author.name}</span>
        </a>
      </h1>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  )
}
