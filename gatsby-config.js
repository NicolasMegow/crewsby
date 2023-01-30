module.exports = {
  siteMetadata: {
    title: "Crewsby",
    author: "Nicolas Megow",
    siteUrl: `https://crewsby.com`,
    description: "Activities for team building",
    keywords: [
      "culture",
      "team building",
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
    "gatsby-plugin-theme-ui",
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
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Crewsby`,
        short_name: `Crewsby`,
        icon: "src/images/Crewsby_logo_512x512.png",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4285F4`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
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
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "team-building",
        path: `${__dirname}/src/content/team-building`,
      },
      __key: "team-building",
    },
  ],
};
