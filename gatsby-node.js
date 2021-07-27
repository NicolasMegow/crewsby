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
          }
        }
      }
    }
  `).then(res => {
    res.data.allMdx.edges.forEach(edge => {
      const { slug } = edge.node.fields
      actions.createPage({
        path: `/team-building/${slug}/`,
        component: require.resolve(`./src/templates/exercise-template.js`),
        context: { slug },
      })
    })
  })
}
