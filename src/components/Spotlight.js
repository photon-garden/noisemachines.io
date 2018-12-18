import React from 'react'

const Spotlight = props => (
  <section
    className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'
    id='first'
  >
    <div className='content'>
      <h2>Magna etiam feugiat</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante
        sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet
        nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra
        pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.
      </p>
      <ul className='actions vertical'>
        <li>
          <a href='#' className='button'>
            Learn More
          </a>
        </li>
      </ul>
    </div>
    <div className='image'>
      <img src={props.imageSource} alt='' />
    </div>
  </section>
)

export default Spotlight
