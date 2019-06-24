import algoliasearch from 'algoliasearch/lite'
import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Link } from 'gatsby-plugin-modal-routing'
import Mobilemenu from '../components/mobilemenu'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import './App.css';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import jwlogo from "../images/jwlogo.png"
import { Global, css } from "@emotion/core"
import * as variable from '../components/variables'

const SearchFilter = styled.div`

`

const SearchResults = styled.div`
.ais-Hits-list{
  margin:0px;
  padding:0px;
  -moz-column-count: 3;
  -webkit-column-count: 3;
  column-count: 3;
  -moz-column-gap: 38px;
  -webkit-column-gap: 38px;
  column-gap: 38px;
  position: relative;
  @media (max-width: ${variable.tabletWidth}) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    -moz-column-gap: 20px;
    -webkit-column-gap: 20px;
    column-gap: 20px;
  }
  @media (max-width: ${variable.mobileWidth}) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
    -moz-column-gap: 10px;
    -webkit-column-gap: 10px;
    column-gap: 10px;
  }
}
.ais-Hits-item{
  display: inline-block;
  margin: 0 0 2em;
  width: 100%;
  counter-increment: item-counter;
  position:relative;
  background-color:white;
  .image-result{
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
    display:block;
    border:0px;
  }
}
.ais-Hits-list:hover li { opacity: 0.3; }
.ais-Hits-list:hover li:hover { 
  opacity: 1;
}
.hit-title{
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #569592;
  color:white;
  margin:0px;
  padding:10px;
}
.no-title-container{
  padding:10px;
}
`




const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const searchClient = algoliasearch(
  '82F8AVAEI8',
  'eb1f34dcb78616a911319ddb0d8fdbff'
)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    ReactModal.setAppElement('#modal')
 }

  render() {
    return (
      <div>
        <Global
      styles={css`
        html body #netlify-identity-widget {
          display:none !important;
          visibility:hidden !important;;
        }
      `}
        />        
        <div id="modal"></div>
      <div className="ais-InstantSearch">
        <InstantSearch indexName="Images" searchClient={searchClient}>
          <header>
          <div className="logo-menu">
          <div class="logo"><img src={jwlogo} alt="Logo" /></div>
          <nav className="main-nav">
            <a className="upload" href="/admin">Upload</a>
            <Mobilemenu />
          </nav>
          </div>
          <div className="below-header">
          <div className="search-box">
          <h1>JW Image seach.</h1>
          <SearchBox />
          </div>
          </div>
          </header>
          <div className="search-container">
          <SearchResults>
            <Hits className="hitter" hitComponent={Hit} />
            <Pagination />
          </SearchResults>
          </div>
        </InstantSearch>
      </div>
      </div>
    );
  }
}

function Hit(props) {
  console.log(props)
  return (
    <Link className="image-result" to={props.hit.fields.slug}
    asModal
    >

    <div className="no-title-container">
      <Img
      fluid={props.hit.image.childImageSharp.fluid}
      />
      </div>
      <div className="search-title">
      <h4><Highlight attribute="procedure" hit={props.hit} /></h4>
      <div><span class="thelabel"><strong>Patient Name:</strong> </span><Highlight className="search-name" attribute="patientname" hit={props.hit} /></div>
      <div><span class="thelabel"><strong>Surgery Date:</strong> </span><Highlight className="search-surgery-date" attribute="surgerydate" hit={props.hit} /></div>
      <div><span class="thelabel"><strong>Photo Date:</strong> </span><Highlight className="search-photo-date" attribute="date" hit={props.hit} /></div>
      <div><span class="thelabel"><strong>Post-Op Time Frame:</strong> </span><Highlight className="search-post-op" attribute="postop" hit={props.hit} /></div>
      <div><span class="thelabel"><strong>Surgeon Name:</strong> </span><Highlight className="search-surgeon-name" attribute="doctor" hit={props.hit} /></div>
    </div>
      </Link>
    
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
