import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import * as variable from './variables.js'
import Mobilemenu from './mobilemenu'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import logo from "../images/underlogo.png"
const Nav = styled.nav`
width:100%;
.logo{
  max-width:175px;
}
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
    font-size:13px;
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

const Menu = () => (

  <StaticQuery
  query={graphql`
    query MenuQuery {
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
      <li><Link className="logo"to="/"><img src={logo} alt="logo" /></Link></li>
      {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
        <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
      ))}
      <li className="number"><a href="tel:+1-763-742-2022">+1-763-742-2022</a></li>
      <li><a class="button-orange-cta" href="#">FREE QUOTE</a></li>
    </ul>
    </Nav>
  </>
  )}
  />
)


export default Menu
