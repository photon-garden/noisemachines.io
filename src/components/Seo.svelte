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