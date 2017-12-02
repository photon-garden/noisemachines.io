module.exports = {
  siteMetadata: {
    title: 'Noise Machines',
    author: {
      name: 'Thomas Bailey',
      contact: {
        email: 'thomas@noisemachines.io',
        twitter: '@noise_machines'
      }
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
}
