   const postQuery = `{
    images: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "image-post" } }}
    ) {
      edges {
        node {
          fields{
            slug
            formatdate
            formatsurgerydate
          }
          objectID: id
          frontmatter {
            doctor
            date
            patientname
            surgeryarea
            procedure
            postop
            surgerydate
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
    arr.map(({ node: { fields, frontmatter, ...rest } }) => ({
      ...frontmatter,
      ...rest,
      ...fields,
    }))
  const settings = { 
      attributesToSnippet: [`excerpt:20`] ,
    }
  
  
  const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.images.edges),
      indexName: `Images`,
      settings,
    },
  ]
  
  module.exports = queries