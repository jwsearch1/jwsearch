import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import * as variable from './variables.js'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const MobileContainer = styled.div`
  display:none;
  position:relative;
  @media (max-width: ${variable.tabletWidth}) {
    display:block;
  }
  .menu-social-holder{
    display:flex !important;
    justify-content:space-between;
    margin-top:10px;
    svg{
      height:30px;
      width:30px;
    }
  }
  .bm-menu {
    background: #262626;
    font-size: 1.15em;
    padding: 2.5em 1.5em 0;
  }
  .bm-overlay {
    left: 0;
    top: 0;
  }
  .bm-menu-wrap {
    top: 0;
  }
  .bm-burger-button {
    height: 30px;
    right: 36px;
    top: 36px;
    width: 36px;
  }
  .bm-burger-bars {
    background: white;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  li{
    list-style:none;
    border:0px;
    color:white;
  }
  .bm-menu a{
    color:white;
    border:0px;
    text-decoration:none;
    text-transform:uppercase;
  }
`;

const Mobilemenu = () => (

  <StaticQuery
  query={graphql`
    query MobileMenuQuery {
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
      <MobileContainer>
    <a href="#" className="bm-burger-button .hamburger-box">
    </a>
    <Menu right>
      {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
        <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
      ))}
      <li className="mobile-contact"><Link to="/contact">Contact</Link></li>
      <li className="mobile-quote"><Link to="/contact">FREE QUOTE</Link></li>
      <li className="number"><span>US. CA.</span><a href="tel:+1-763-742-2022">+1-763-742-2022</a></li>
      <div className="menu-social-holder">
      <li className="menu-social"><a href="#"><FaFacebookF></FaFacebookF></a></li>
      <li className="menu-social"><a href="#"><FaTwitter></FaTwitter></a></li>
      <li className="menu-social"><a href="#"><FaLinkedinIn></FaLinkedinIn></a></li>
      </div>
    </Menu>
    </MobileContainer>
  </>
  )}
  />
)


export default Mobilemenu

