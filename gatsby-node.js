const remark = require('remark');
const remarkHTML = require('remark-html');
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/logout/)) {
    page.matchPath = "/logout/*"

    // Update the page.
    createPage(page)
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      if (String(edge.node.frontmatter.templateKey) === "null"){
        return;
      }  
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  const { frontmatter } = node

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    if (frontmatter) {
      const { date } = frontmatter
      if(date){
        const newdate = Number(date)
        createNodeField({
          name: `formatdate`,
          node,
          value: newdate,
        })
      }
      const { surgerydate } = frontmatter
      if(surgerydate){
        const newsurgerydate = Number(surgerydate)
        createNodeField({
          name: `formatsurgerydate`,
          node,
          value: newsurgerydate,
        })
      }
      const { content } = frontmatter
      
      if (content) {
        const { backgroundimage } = content
        if (backgroundimage) {
          if (backgroundimage.indexOf('/img') === 0) {
            frontmatter.content.backgroundimage = path.relative(
              path.dirname(node.fileAbsolutePath),
              path.join(__dirname, '/static', backgroundimage)
            )
          }
        }
      }
    }
  }
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};