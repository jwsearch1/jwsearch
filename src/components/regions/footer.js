import React from 'react'
import Container from '../../components/layout/container'
import * as variable from '../variables.js'
import styled from 'styled-components'
import { Link } from 'gatsby'
import FooterMenu from '../footermenu'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterStyle = styled.footer`
position:relative;
background-color: ${variable.darkGray};
padding:50px 0px;
width:110%;
top:-5%;
left:-5%;
transform:rotate(-1deg);
@media (max-width: ${variable.tabletWidth}) {
  transform:none;
  width:100%;
  top:auto;
  left:auto;
}
.footer-container{
  transform:rotate(1deg);
  @media (max-width: ${variable.tabletWidth}) {
    transform:none;
  }
}
.footer-social{
  display:flex;
}
.footer-top-container{
  padding-bottom:60px;
  border-bottom:1px solid ${variable.gray};
  margin-bottom:60px;
}
.footer-bottom-container{
  .menu-social{
    padding:0px 10px;
  }
  ul{
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    justify-content:space-between;
    @media (max-width: ${variable.tabletWidth}) {
      display:block;
    }
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
  svg{
    font-size:22px;
  }
}
a.footer-gray{
  color: ${variable.gray};
}
`

const Footer = () => (
  <FooterStyle>
    <Container className="footer-container">
      <div className="footer-top-container">
    <FooterMenu className="footer-menu">
    </FooterMenu>
    </div>
    <div className="footer-bottom-container">
    <ul>
      <li><a className="footer-gray" href="">TERMS & CONDITIONS</a></li>
      <li><a className="footer-gray" href="">PRIVACY POLICY</a></li>
      <li className="number"><span>US. CA</span><a href="tel:+1-763-742-2022">+ 1-763-742-2022</a></li>
      <li className="number"><span>INTL</span><a href="tel:+1-2800-123-1234">+ 1-2800-123-1234</a></li>
      <div className="footer-social">
      <li className="menu-social"><a target="_blank" href="https://www.facebook.com/underguardservices/"><FaFacebookF></FaFacebookF></a></li>
      <li className="menu-social"><a target="_blank" href="#"><FaTwitter></FaTwitter></a></li>
      <li className="menu-social"><a target="_blank" href="https://www.linkedin.com/company/underguard-teleservices/"><FaLinkedinIn></FaLinkedinIn></a></li>
      </div>
    </ul>
    </div>
    </Container>
  </FooterStyle>
)


export default Footer
