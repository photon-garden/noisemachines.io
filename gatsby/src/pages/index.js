/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Seo from '../components/Seo'
import ImpossibleWindow from '../components/ImpossibleWindow'
import Emoji from '../components/Emoji'
import '../sass/index.scss'

export default () => {
  return (
    <main>
      <Seo />
      <div className='art-container'>
        <ImpossibleWindow />
      </div>
      <div className='text-container'>
        <h1>Hi, I'm Thomas.</h1>
        <ul>
          <li>
            <Emoji label='wave emoji'>🌊</Emoji> I co-founded the band{' '}
            <a href='https://partialsband.com'>Partials</a>.
          </li>
          <li>
            <Emoji label='leaf emoji'>🍃</Emoji> I make{' '}
            <a href='/art'>generative art</a>.
          </li>
          <li>
            <Emoji label='ladybug emoji'>🐞</Emoji> These are my️{' '}
            <a href='/principles'>principles</a>.
          </li>
        </ul>
      </div>
    </main>
  )
}
