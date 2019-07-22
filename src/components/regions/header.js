import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '../layout/container'
import Menu from '../menu'
import styled from "styled-components"
import logo from "../../images/underlogo.png"
import * as variable from '../variables'
import Mobilemenu from '../mobilemenu'

const AboveHeader = styled.div`
padding:20px 0px;

`;

const HeaderStyle = styled.header`
  display:flex;
  justify-content:center;
  position:fixed;
  width:100%;
  z-index:100;
  background-color:${variable.darkGray};
  .mobile-logo{
    display:none;
    @media (max-width: ${variable.tabletWidth}) {
      display:block;
    }
  }
  .header-menu-logo{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding-top:20px;
    padding-bottom:20px;  
    z-index:100;
    padding:20px 20px;
  }
  .right-logo-menu{

    ul{
      display:flex;
      padding:0px;
      margin:0px;
      li{
        margin-left:40px;
        list-style:none;
        a{
          color:white;
          text-decoration:none;
          border-bottom:0px;
          &.button-white-border{
            border:2px solid #ffffff;
            border-radius:25px;
            padding:10px 30px;
          }
        }
      }
    }
  }
`;

const Header = () => (
  <HeaderStyle>
      <Container className="header-menu-logo">
      <AboveHeader>
      <Link className="mobile-logo"to="/"><img src={logo} alt="logo" /></Link>
      </AboveHeader>
      <Menu>
      </Menu>

      <Mobilemenu />
      </Container>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
