/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: "peopleskills",
        path: `${__dirname}/src/content/people-skills`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "teambuilding",
        path: `${__dirname}/src/content/teambuilding`,
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
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
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
  ],
}
