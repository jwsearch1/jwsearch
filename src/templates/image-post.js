import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Img from "gatsby-image";

export const ImagePostTemplate = ({
  title,
  image,
  slug,
}) => {

  return (

      <Layout>
      
      </Layout>
  )
}

const ImagePost = ({ data }) => {
  const { markdownRemark: post } = data
  

  return (
      <ImagePostTemplate
        content={post.html}
        frontmatter={post.frontmatter}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        slug={post.fields.slug}
      />
  )
}

export default ImagePost

export const pageQuery = graphql`
  query ImagePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields{
        slug
      }
      frontmatter {
        title
        tags
        image{
          childImageSharp {
            fluid(maxWidth: 756, maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author
      }
    }
  }
`
