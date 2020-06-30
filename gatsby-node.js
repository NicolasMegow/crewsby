const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type == "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node, 
            name: 'slug',
            value: slug,
        })
    }
  }

module.exports.createPages = async function ({ actions, graphql }) {
    await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(res => {
      res.data.allMarkdownRemark.edges.forEach(edge => {
        const slug = edge.node.fields.slug
        actions.createPage({
          path: `/tutorials/${slug}`,
          component: require.resolve(`./src/templates/tutorial.js`),
          context: { slug },
        })
      })
    })
  }

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (["build-html", "develop-html"].includes(stage)) {
    /*
     * During the build step, `auth0-spa-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-spa-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-spa-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}