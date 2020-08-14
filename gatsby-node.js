const path = require('path')

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "Mdx") {
    const fileNode = getNode(node.parent);
    const pathPrefix = fileNode.sourceInstanceName
    const slug = path.basename(node.fileAbsolutePath, '.mdx')
    const method = path.dirname(node.fileAbsolutePath).split("/").pop()
    createNodeField({ node, name: "slug", value: `${slug}` });
    createNodeField({ node, name: "method", value: `${method}` });
    createNodeField({ node, name: "tutorialType", value: pathPrefix });
  }
}

module.exports.createPages = async function ({ actions, graphql }) {
  await graphql(`
      {
        allMdx {
          edges {
            node {
              fields {
                slug
                tutorialType
                method
              }
            }
          }
        }
      }
    `).then(res => {
    res.data.allMdx.edges.forEach(edge => {
      const { slug, tutorialType, method } = edge.node.fields
      if (slug == "_index") {
        actions.createPage({
          path: `/${tutorialType}/${method}`,
          component: require.resolve(`./src/templates/collection-template.js`),
          context: { slug, tutorialType, method },
        })
      } else {
        actions.createPage({
          path: `/${tutorialType}/${method}/${slug}`,
          component: require.resolve(`./src/templates/deck-template.js`),
          context: { slug },
        })
      }
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/mein-account/)) {
    page.matchPath = "/mein-account/*"

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