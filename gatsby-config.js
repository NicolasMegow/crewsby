/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'CREWSBY',
    author: "Nicolas Megow",
    siteUrl: `https://crewsby.com`,
    description: 'Übungen für geniale Teamarbeit',
    keywords: ["scrum", "agile", "remote", "teamwork", "retro", "retrospektive", "teamgefühl", "übungen", "methoden", "lean startup", "design thinking"],
    siteUrl: 'htts://crewsby.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172124771-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'solo-uebungen',
        path: `${__dirname}/src/content/solo-uebungen`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team-uebungen',
        path: `${__dirname}/src/content/team-uebungen`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ]
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crewsby`,
        short_name: `Crewsby`,
        icon: `static/crewsby_logo-512x512.png`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4285F4`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ]
}
