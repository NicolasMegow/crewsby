"use strict";

var path = require("path");

module.exports.onCreateNode = function (_ref) {
  var node = _ref.node,
      getNode = _ref.getNode,
      actions = _ref.actions;
  var createNodeField = actions.createNodeField;

  if (node.internal.type == "Mdx") {
    var fileNode = getNode(node.parent);
    var pathPrefix = fileNode.sourceInstanceName;
    var slug = path.basename(node.fileAbsolutePath, ".mdx");
    var method = path.dirname(node.fileAbsolutePath).split("/").pop();
    createNodeField({
      node: node,
      name: "slug",
      value: "".concat(slug)
    });
    createNodeField({
      node: node,
      name: "method",
      value: "".concat(method)
    });
    createNodeField({
      node: node,
      name: "contentType",
      value: pathPrefix
    });
  }
};

module.exports.createPages = function _callee(_ref2) {
  var actions, graphql;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          actions = _ref2.actions, graphql = _ref2.graphql;
          _context.next = 3;
          return regeneratorRuntime.awrap(graphql("\n    {\n      allMdx {\n        edges {\n          node {\n            fields {\n              slug\n              contentType\n            }\n            frontmatter {\n              type\n            }\n          }\n        }\n      }\n    }\n  ").then(function (res) {
            res.data.allMdx.edges.forEach(function (edge) {
              var _edge$node$fields = edge.node.fields,
                  slug = _edge$node$fields.slug,
                  contentType = _edge$node$fields.contentType;
              var userType = edge.node.frontmatter.type;

              if (contentType == "methoden") {
                actions.createPage({
                  path: "/methoden/".concat(slug),
                  component: require.resolve("./src/templates/methode-template.js"),
                  context: {
                    slug: slug,
                    contentType: contentType
                  }
                });
              } else {
                actions.createPage({
                  path: "/".concat(userType, "/").concat(contentType, "/").concat(slug),
                  component: require.resolve("./src/templates/uebung-info.js"),
                  context: {
                    slug: slug
                  }
                }), actions.createPage({
                  path: "/".concat(userType, "/").concat(contentType, "/").concat(slug, "/42"),
                  component: require.resolve("./src/templates/uebung-template.js"),
                  context: {
                    slug: slug
                  }
                });
              }
            });
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.


exports.onCreatePage = function _callee2(_ref3) {
  var page, actions, createPage;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          page = _ref3.page, actions = _ref3.actions;
          createPage = actions.createPage; // page.matchPath is a special key that's used for matching pages
          // only on the client.

          if (page.path.match(/^\/mein-account/)) {
            page.matchPath = "/mein-account/*"; // Update the page.

            createPage(page);
          }

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.onCreateWebpackConfig = function (_ref4) {
  var stage = _ref4.stage,
      loaders = _ref4.loaders,
      actions = _ref4.actions;

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
        rules: [{
          test: /auth0-spa-js/,
          use: loaders["null"]()
        }]
      }
    });
  }
};