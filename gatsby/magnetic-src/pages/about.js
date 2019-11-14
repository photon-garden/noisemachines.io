import React from 'react'

export default () => {
  return (
    <div id="main">
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
            <h3>Goodness</h3>
            <p>
              <a href="https://www.frankchimero.com/writing/the-webs-grain/">
                Frank Chimero
              </a>,{' '}
              <a href="https://www.youtube.com/watch?v=TpqwY7QL7r8">
                Orson Welles
              </a>
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
        </div>
      </section>
    </div>
  )
}
