import React from 'react'
import Header from '../components/header'
import Spotlight from '../components/spotlight'

import bannerImageSource from '../images/banner.jpg'
import author from '../data/author'
import InlineSineWave from '../components/InlineSineWave'
import Player from '../components/Player'
const twitter = author.contact.twitter

const AnimatedSine = () => {
  return (
    <Player speed={4}>
      {progress => <InlineSineWave offset={progress} />}
    </Player>
  )
}

export default () => {
  return (
    <div id='top'>
      <div id='page-wrapper'>
        <div id='wrapper' className='divided'>
          <section className='banner style1 orient-right content-align-left image-position-center fullscreen onload-image-fade-in onload-content-fade-right'>
            <Header />
            <div className='content row'>
              <h1>
                Hi, I'm <a href={twitter}>Thomas</a>.
              </h1>
              <p className='major'>
                I'm a musician and programmer. I co-founded{' '}
                <a href='https://partialsband.com/'>
                  <AnimatedSine />
                  Partials
                </a>
                , a band that makes catchy, weird music at the border between
                humanity and technology.
              </p>
              <p />
            </div>
            <div className='image'>
              <img src={bannerImageSource} alt='' />
            </div>
          </section>

          <footer className='wrapper style1 align-center'>
            <div className='inner'>
              <ul className='icons'>
                <li>
                  <a href='#' className='icon style2 fa-twitter'>
                    <span className='label'>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href='#' className='icon style2 fa-facebook'>
                    <span className='label'>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href='#' className='icon style2 fa-instagram'>
                    <span className='label'>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href='#' className='icon style2 fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='#' className='icon style2 fa-envelope'>
                    <span className='label'>Email</span>
                  </a>
                </li>
              </ul>
              <p>© Untitled.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
