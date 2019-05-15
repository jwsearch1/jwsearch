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
      <div id ="modal">
      <button onClick={this.openModal}>Open Modal</button>
          <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </ReactModal>
      </div>
      <div className="ais-InstantSearch">

        <h1>JW Image Search</h1>
        <InstantSearch indexName="Images" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Tags</h2>
            <RefinementList attribute="tags" />
            <h2>Doctor</h2>
            <RefinementList attribute="doctor" />
            <Configure hitsPerPage={4} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits className="hitter" hitComponent={Hit} />
            <Pagination />
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
    <Link to={props.hit.fields.slug}
    asModal
  >

      <Img
      fluid={props.hit.image.childImageSharp.fluid}
      />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">{props.hit.title}</div>
      </Link>
    
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
