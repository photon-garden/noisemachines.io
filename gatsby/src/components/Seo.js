import React from 'react'
import Helmet from 'react-helmet'
import defaults from '../data/site-metadata.js'

export default page => {
  if (typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin
  }

  const title = page.title || defaults.title
  const description = page.description || defaults.description
  const url = new URL(page.path || '', defaults.baseUrl)
  const image = page.image ? new URL(page.image, defaults.baseUrl) : false

  return (
    <Helmet htmlAttributes={{ lang: 'en-US' }}>
      <title>{title}</title>
      <link rel='canonical' href={url} />
      <meta name='description' content={description} />
      {image && <meta name='image' content={image} />}

      <meta property='og:url' content={url} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={defaults.author.contact.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  )
}
