const path = require("path")

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "Mdx") {
    const fileNode = getNode(node.parent)
    const contentType = fileNode.sourceInstanceName
    const slug = path.basename(node.fileAbsolutePath, ".mdx")
    createNodeField({ node, name: "slug", value: `${slug}` })
    createNodeField({ node, name: "contentType", value: contentType })
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
              contentType
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `).then(res => {
    res.data.allMdx.edges.forEach(edge => {
      const { slug } = edge.node.fields
      const { type } = edge.node.frontmatter
      if (type === "Exercise") {
        actions.createPage({
          path: `/teambuilding/${slug}/`,
          component: require.resolve(`./src/templates/exercise-template.js`),
          context: { slug },
        })
      } else if (type === "Tutorial") {
        actions.createPage({
          path: `/teambuilding/${slug}/`,
          component: require.resolve(`./src/templates/tutorial-template.js`),
          context: { slug },
        })
      } else {
        actions.createPage({
          path: `/people-skills/${slug}/`,
          component: require.resolve(`./src/templates/skill-template.js`),
          context: { slug },
        })
      }
    })
  })
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
