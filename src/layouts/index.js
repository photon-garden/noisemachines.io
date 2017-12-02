import React from 'react'
import '../sass/main.scss'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children, data }) => {
  return (
    <div id="top">
      <Nav />
      <div id="page-wrapper">
        <Header
          author={data.site.siteMetadata.author}
          title={data.site.siteMetadata.title}
        />
        {children()}
      </div>
      <Footer contact={data.site.siteMetadata.author.contact} />
    </div>
  )
}

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        author {
          name
          contact {
            email
            twitter
          }
        }
        title
      }
    }
  }
`
