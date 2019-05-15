import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Img from "gatsby-image";

export const DoctorTemplate = ({
  title,
  doctorphoto,
  slug,
}) => {

  return (

      <Layout>
      
      </Layout>
  )
}

const DoctorPost = ({ data }) => {
  const { markdownRemark: post } = data
  

  return (
      <DoctorTemplate
        content={post.html}
        frontmatter={post.frontmatter}
        title={post.frontmatter.title}
        image={post.frontmatter.doctorphoto}
        slug={post.fields.slug}
      />
  )
}

export default DoctorPost

export const pageQuery = graphql`
  query DoctorPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields{
        slug
      }
      frontmatter {
        title
        image{
          childImageSharp {
            fluid(maxWidth: 756, maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
