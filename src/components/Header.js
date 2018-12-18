import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <header role='banner'>
      <nav role='navigation'>
        <ul>
          <li>
            <Link to='/writing'>Writing</Link>
          </li>
          <li>
            <a href='https://partialsband.com'>Music</a>
          </li>
          <li>
            <a href='http://github.com/noise-machines'>Code</a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
