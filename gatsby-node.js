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
          path: `/app/${slug}`,
          component: require.resolve(`./src/templates/uebung.js`),
          context: { slug },
        })
      })
    })
  }