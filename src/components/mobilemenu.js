import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import * as variable from './variables.js'
import {
  ClearRefinements,
  RefinementList,
  SortBy,
  RangeSlider,
  RangeInput
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
  .inline-block{display:inline;}
  .clear-filter{float:right;} 
  .clear-filter button{color:#fff;}
  .clearfix{ clear: both;display: block;content: "";}
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
            <h2 className="inline-block">Filter</h2>
            <div className="clear-filter">
                <ClearRefinements translations={{ reset: 'Clear',}}/>            
            </div>
            <div className="clearfix"></div>
            <div className="filters-inner">
              <div className="filter-procedure">
                <h3>Procedure</h3>
                <RefinementList attribute="procedure" />
              </div>
              <div className="filter-surgeryarea">
                <h3>Surgery Area(s)</h3>
                <RefinementList attribute="surgeryarea" />
              </div>
              <div className="filter-doctor">
                <h3>Surgeon</h3>
                <RefinementList attribute="doctor" />
              </div>
              <SortBy
              defaultRefinement="Images"
                items={[
                  { value: 'Images', label: 'Sort by Photo Date' },
                  { value: 'photo_date_asc', label: 'Photo Date asc.' },
                  { value: 'photo_date_desc', label: 'Photo Date desc.' },
                ]}
              />
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

