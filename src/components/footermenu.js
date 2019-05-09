import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import * as variable from './variables.js'
import logo from '../images/underlogo.png'
const Nav = styled.nav`
width:100%;
  ul{
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    justify-content:space-between;
  }
  li{
    margin-bottom:0px;
    text-decoration:none;
    display: flex;
    align-items: center;
    &.number{
      color:${variable.brand1};
      a{
        color:${variable.brand1};
        margin-left:20px;
      }
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 400;
    transition: all 0.2s;
    font-family:Montserrat, sans-serif; 
    text-transform:uppercase;
    font-size:16px;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    text-decoration:none;
    border-bottom:0px;
    display: flex;
    align-items: center;
    &:hover {
      color: ${variable.brand1};
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    display:none;
  }
  svg{
    font-size:22px;
  }
`

const FooterMenu = () => (

  <StaticQuery
  query={graphql`
    query FooterMenuQuery {
      site {
        siteMetadata {
          menuLinks{
            name
            link
          }
        }
      }
    }
  `}
  render={data => (
    <>
    <Nav>
    <ul>
      <li>
      <Link className="footer-logo"to="/"><img src={logo} alt="logo" /></Link>
      </li>
      {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
        <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
      ))}
    </ul>
    </Nav>
  </>
  )}
  />
)


export default FooterMenu
