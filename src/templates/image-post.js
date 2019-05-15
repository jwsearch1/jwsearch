import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Img from "gatsby-image";
import { Link } from 'gatsby-plugin-modal-routing'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

export const ImagePostTemplate = ({
  title,
  image,
  slug,
}) => {

  return (

    <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>{title}</h2>

        <Img
      fluid={image.childImageSharp.fluid}
      />
      </div>
    )}
  </ModalRoutingContext>
  )
}

const ImagePost = ({ data }) => {
  const { markdownRemark: post } = data
 console.log(post)

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
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
