const path = require("path");

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type == "Mdx") {
    const fileNode = getNode(node.parent);
    const contentType = fileNode.sourceInstanceName;
    const slug = path.basename(node.fileAbsolutePath, ".mdx");
    createNodeField({ node, name: "slug", value: `${slug}` });
    createNodeField({ node, name: "contentType", value: contentType });
  }
};
