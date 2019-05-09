import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Section from "../components/organisms/sections/section"
import Helmet from 'react-helmet'

export const PageTemplate = ({ title, content }) => {

  return (
    
    <main id="main" className="main">
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
      </Helmet>
      {content.map(( section, index ) => (
        
        <Section
        key={index}
        section={section}
        >
        </Section>
      ))}
    </main>
  );
};


const Page = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <PageTemplate
        title={post.frontmatter.title}
        content={post.frontmatter.content}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired
};

export default Page;

export const PageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        content {
          sectiontitle
          sectionid
          backgroundcolor
          textcolor
          backgroundimage{
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          pagetitle
          sectionvalue{
            type
            markdown
            leftmarkdown
            rightmarkdown
            columnnumber
            columnmarkdown{
              markdown
            }
          }
        }
      }
    }
  }
`;