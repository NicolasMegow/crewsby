const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const contentType = fileNode.sourceInstanceName;
    const slug = createFilePath({
      node,
      getNode,
      basePath: "src/content/",
    });
    createNodeField({ node, name: "slug", value: slug });
    createNodeField({ node, name: "contentType", value: contentType });
  }
};
