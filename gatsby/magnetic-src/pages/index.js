import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

/*
<script src="assets/js/jquery.min.js" />
<script src="assets/js/skel.min.js" />
<script src="assets/js/util.js" />
<script src="assets/js/main.js" />
*/

const Banner = () => (
  <section id="banner">
    <header>
      <h2>Noise Machines</h2>
      <p>Music, technology, and making new worlds</p>
    </header>
    <footer>
      <ul className="actions">
        <li>
          <a href="#" className="button big">
            Get Started
          </a>
        </li>
      </ul>
    </footer>
  </section>
)

export default () => {
  return (
    <div id="main">
      <Banner />
      <section id="one" className="features">
        <header className="major">
          <h2>Magna sed consequat</h2>
          <p>
            Mauris lectus odio, mattis nec velit eu, luctus dictum diam. Quis<br
            />
            tempus que ornare purus a bibendum ultricies.
          </p>
        </header>
        <div className="content">
          <section className="feature">
            <span className="icon major fa-diamond" />
            <h3>Etiam sed feugiat</h3>
            <p>
              Praesent egestas quam at lorem imperdiet lobortis. Mauris
              condimentum et euismod ipsum, at ullamcorper libero dolor auctor
              sit amet. Proin vulputate amet sem ut tempus. Donec quis ante
              viverra, suscipit euismod habitant lorem ipsum dolor.
            </p>
          </section>
          <section className="feature">
            <span className="icon major fa-save" />
            <h3>Ipsum et bibendum</h3>
            <p>
              Praesent egestas quam at lorem imperdiet lobortis. Mauris
              condimentum et euismod ipsum, at ullamcorper libero dolor auctor
              sit amet. Proin vulputate amet sem ut tempus. Donec quis ante
              viverra, suscipit euismod habitant lorem ipsum dolor.
            </p>
          </section>
          <section className="feature">
            <span className="icon major fa-newspaper-o" />
            <h3>Sit lorem aliquam</h3>
            <p>
              Praesent egestas quam at lorem imperdiet lobortis. Mauris
              condimentum et euismod ipsum, at ullamcorper libero dolor auctor
              sit amet. Proin vulputate amet sem ut tempus. Donec quis ante
              viverra, suscipit euismod habitant lorem ipsum dolor.
            </p>
          </section>
        </div>
      </section>

      <section id="two" className="spotlight">
        <div className="image">
          <img src={pic01} alt="" />
        </div>
        <div className="content">
          <h2>Volutpat ante libero</h2>
          <p>
            Praesent egestas quam at lorem imperdiet lobortis. Mauris
            condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit
            amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra,
            suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet
            sollicitudin.
          </p>
        </div>
      </section>

      <section id="three" className="spotlight alt">
        <div className="image">
          <img src={pic02} alt="" />
        </div>
        <div className="content">
          <h2>Elit auctor tempus</h2>
          <p>
            Praesent egestas quam at lorem imperdiet lobortis. Mauris
            condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit
            amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra,
            suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet
            sollicitudin.
          </p>
        </div>
      </section>

      <section id="four" className="spotlight">
        <div className="image">
          <img src={pic03} alt="" />
        </div>
        <div className="content">
          <h2>Porta vestibulum</h2>
          <p>
            Praesent egestas quam at lorem imperdiet lobortis. Mauris
            condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit
            amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra,
            suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet
            sollicitudin.
          </p>
        </div>
      </section>

      <section id="five" className="cta">
        <header>
          <h2>Sed euismod nullam</h2>
          <p>
            Odio mattis nec velit eu, luctus dictum diam. Quis<br />
            tempus que ornare purus a bibendum ultricies
          </p>
        </header>
        <ul className="actions">
          <li>
            <a href="#" className="button big">
              Get Started
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
