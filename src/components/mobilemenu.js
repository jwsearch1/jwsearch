import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import * as variable from './variables.js'
import {
  ClearRefinements,
  RefinementList,
} from 'react-instantsearch-dom';
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const SearchFilter = styled.div`

`

const MobileContainer = styled.div`
  position:relative;
  max-height: 35px;
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
    background: black;
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
          <SearchFilter className="filters">
            <h2>Filter</h2>
            <div className="filters-inner">
            <div className="filter-procedure">
            <h3>Procedure</h3>
            <RefinementList attribute="procedure" />
            </div>
            <div className="filter-doctor">
            <h3>Surgeon</h3>
            <RefinementList attribute="doctor" />
            </div>
            <div className="filter-post-surgery-date">
            <h3>Surgery Date</h3>
            <RefinementList attribute="surgerydate" />
            </div>
            <div className="filter-post-photo-date">
            <h3>Photo Date</h3>
            <RefinementList attribute="date" />
            </div>
            </div>
          </SearchFilter>
          <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
    </Menu>
    </MobileContainer>
  </>
  )}
  />
)


export default Mobilemenu

