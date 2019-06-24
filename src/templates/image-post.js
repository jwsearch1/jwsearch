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

const ImagePoster = styled.div`
  img{
    max-width:100%;
  }
`

export const ImagePostTemplate = ({
  image,
  slug,
  doctor,
}) => {

  return (

    <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <ImagePoster>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              JW
            </h1>
          </header>
        )}

        <Img
      fluid={image.childImageSharp.fluid}
      />
              <h2><span></span><span> - {doctor}</span></h2>
      </ImagePoster>
    )}
  </ModalRoutingContext>
  )
}

const ImagePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <ImagePostTemplate
        content={post.html}
        frontmatter={post.frontmatter}
        doctor={post.frontmatter.doctor}
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
        doctor
        patientname
        surgeryarea
        procedure
        postop
        surgerydate
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
