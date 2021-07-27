/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const remarkSlug = require(`remark-slug`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Crewsby",
    author: "Nicolas Megow",
    siteUrl: `https://crewsby.com`,
    description: "Start hacking you culture and join a community of peers.",
    keywords: [
      "culture",
      "hacking",
      "agile",
      "remote",
      "teamwork",
      "retro",
      "transformation",
      "psychologcial safety",
      "new work",
    ],
    siteUrl: "htts://crewsby.com",
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-172124771-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        facebookPixel: {
          pixelId: "",
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "team-building",
        path: `${__dirname}/src/content/team-building`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://strategiepark.us12.list-manage.com/subscribe/post?u=6e95932404a064987d62d0666&amp;id=66c5d513d8",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crewsby`,
        short_name: `Crewsby`,
        icon: `static/Crewsby_logo_512x512.png`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4285F4`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
}
