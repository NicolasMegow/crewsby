/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Teamgefühl',
    author: "Nicolas Megow"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/`,
    },
  },
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            linkImagesToOriginal: false,
          }
        }
      ]
    },
  },
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/app/*`] },
  },
  {
    resolve: "gatsby-plugin-auth0",
    options: {
      domain: "dev-82xnrm8r.eu.auth0.com",
      clientId: "e3FeHnXfDQd1zyL3CCyL2BDlkZbYT8RQ",
    },
  },

]  
}
