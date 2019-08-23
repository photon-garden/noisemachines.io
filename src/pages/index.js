import React from 'react'
import Seo from '../components/Seo'
import '../css/index.css'

export default () => {
  return (
    <main>
      <Seo />
      <div class='text-container'>
        <h1>Hi, I'm Thomas.</h1>
        <ul>
          <li>
            🌊 I co-founded the band{' '}
            <a href='https://partialsband.com'>Partials</a>.
          </li>
          <li>
            🍃 I make <a href='/art'>generative art</a>.
          </li>
          <li>
            🐞 These are my️ <a href='/principles'>principles</a>.
          </li>
        </ul>
      </div>
    </main>
  )
}
