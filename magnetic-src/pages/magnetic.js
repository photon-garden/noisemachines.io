import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

export default () => {
  return (
    <div id="top">
      <div id="page-wrapper">
        <header id="header">
          <h1>
            <a href="index.html">
              Magnetic <span>by Pixelarity</span>
            </a>
          </h1>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

        <nav id="menu">
          <div className="inner">
            <h2>Menu</h2>
            <ul className="links">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="generic.html">Generic</a>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="#">Log In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="main">
          <section id="banner">
            <header>
              <h2>Ipsum aliquam</h2>
              <p>Sed feugiat tempus sem amet imperdiet</p>
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

          <section id="one" className="features">
            <header className="major">
              <h2>Magna sed consequat</h2>
              <p>
                Mauris lectus odio, mattis nec velit eu, luctus dictum diam.
                Quis<br />
                tempus que ornare purus a bibendum ultricies.
              </p>
            </header>
            <div className="content">
              <section className="feature">
                <span className="icon major fa-diamond" />
                <h3>Etiam sed feugiat</h3>
                <p>
                  Praesent egestas quam at lorem imperdiet lobortis. Mauris
                  condimentum et euismod ipsum, at ullamcorper libero dolor
                  auctor sit amet. Proin vulputate amet sem ut tempus. Donec
                  quis ante viverra, suscipit euismod habitant lorem ipsum
                  dolor.
                </p>
              </section>
              <section className="feature">
                <span className="icon major fa-save" />
                <h3>Ipsum et bibendum</h3>
                <p>
                  Praesent egestas quam at lorem imperdiet lobortis. Mauris
                  condimentum et euismod ipsum, at ullamcorper libero dolor
                  auctor sit amet. Proin vulputate amet sem ut tempus. Donec
                  quis ante viverra, suscipit euismod habitant lorem ipsum
                  dolor.
                </p>
              </section>
              <section className="feature">
                <span className="icon major fa-newspaper-o" />
                <h3>Sit lorem aliquam</h3>
                <p>
                  Praesent egestas quam at lorem imperdiet lobortis. Mauris
                  condimentum et euismod ipsum, at ullamcorper libero dolor
                  auctor sit amet. Proin vulputate amet sem ut tempus. Donec
                  quis ante viverra, suscipit euismod habitant lorem ipsum
                  dolor.
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
                condimentum et euismod ipsum, at ullamcorper libero dolor auctor
                sit amet. Proin vulputate amet sem ut tempus. Donec quis ante
                viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum
                dolor sit amet sollicitudin.
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
                condimentum et euismod ipsum, at ullamcorper libero dolor auctor
                sit amet. Proin vulputate amet sem ut tempus. Donec quis ante
                viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum
                dolor sit amet sollicitudin.
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
                condimentum et euismod ipsum, at ullamcorper libero dolor auctor
                sit amet. Proin vulputate amet sem ut tempus. Donec quis ante
                viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum
                dolor sit amet sollicitudin.
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

        <section id="footer">
          <div className="inner">
            <section className="about">
              <h3>Proin sed ultricies</h3>
              <p>
                Praesent egestas quam at lorem imperdiet lobortis. Mauris
                condimentum et euismod ipsum, at ullamcorper libero dolor auctor
                sit amet. Proin vulputate.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Get in Touch</h3>
              <ul className="contact">
                <li className="fa-phone">(000) 000-0000</li>
                <li className="fa-envelope">
                  <a href="#">information@untitled.tld</a>
                </li>
                <li className="fa-twitter">
                  <a href="#">@untitled-tld</a>
                </li>
                <li className="fa-facebook">
                  <a href="#">facebook.com/untitled</a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Mailing Address</h3>
              <p>
                Untitled Corp<br />
                1234 Fictional Road<br />
                Suite 5432<br />
                Nashville, TN 00000<br />
                USA
              </p>
            </section>
          </div>
          <div className="copyright">
            <p>Copyright &copy; Untitled Corp. All rights reserved.</p>
          </div>
        </section>
      </div>

      <script src="assets/js/jquery.min.js" />
      <script src="assets/js/skel.min.js" />
      <script src="assets/js/util.js" />
      <script src="assets/js/main.js" />
    </div>
  )
}
