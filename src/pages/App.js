import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'gatsby-plugin-modal-routing'
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
import styled from 'styled-components'

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
  &:before{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      width: 2em;
      height: 2em;
      line-height: 2em;
      text-align: center;
      font-weight: bold;
      background-color: black;
      color:white;
      z-index:3;
      content: counter(item-counter);
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
  'QD0L8EBPLJ',
  'f25a3ede8804a4e652d1514b226f6d57'
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
        <div id="modal"></div>
      <div className="ais-InstantSearch">
        <InstantSearch indexName="Images" searchClient={searchClient}>
          <header>
          <div className="logo-menu">
          <div class="logo">JW Logo</div>
          <nav>
            <a href="/admin">Upload</a>
          </nav>
          </div>
          <div className="search-box">
          <h1>JW Image seach.</h1>
          <SearchBox />
          </div>
          </header>
          <div className="search-container">
          <SearchFilter className="filters">
            <div className="filter-tags">
            <h2>Tags</h2>
            <RefinementList attribute="tags" />
            </div>
            <div className="filter-doctor">
            <h2>Doctor</h2>
            <RefinementList attribute="doctor" />
            </div>
            <ClearRefinements />
          </SearchFilter>
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
    <div className="search-title">
    <Highlight attribute="title" hit={props.hit} />
    <div><Highlight className="search-doctor" attribute="doctor" hit={props.hit} /></div>
    </div>
    <div className="no-title-container">
      <Img
      fluid={props.hit.image.childImageSharp.fluid}
      />
      </div>
      </Link>
    
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
