const path = require(`path`);
const _ = require("lodash");

const { createFilePath } = require(`gatsby-source-filesystem`);
const { info } = require("console");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              type
              price
              author
              tag
              gender
              customField {
                name
                values
                gender
                list
              }
              line
              display
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === `blog`) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    } else {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/product-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    }
  });
};

