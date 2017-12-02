import React from 'react'

export default ({ contact }) => (
  <section id="footer">
    <div className="inner">
      <section className="about">
        <h3>Proin sed ultricies</h3>
        <p>
          Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum
          et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
          vulputate.
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
          <li className="fa-envelope">
            <a href="#">{contact.email}</a>
          </li>
          <li className="fa-twitter">
            <a href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
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
  </section>
)
