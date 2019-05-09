   const postQuery = `{
    posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            tags
            category
            image{
                childImageSharp{
                  fluid (maxWidth:500, quality:50){
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
                publicURL
              }
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
  
  const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      ...rest,
    }))
  const settings = { 
      attributesToSnippet: [`excerpt:20`] ,
    }
  
  
  const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.posts.edges),
      indexName: `Posts`,
      settings,
    },
  ]
  
  module.exports = queries