import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
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


const searchClient = algoliasearch(
  'QD0L8EBPLJ',
  'f25a3ede8804a4e652d1514b226f6d57'
)

class App extends Component {
  render() {
    return (
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
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  console.log(props)
  return (
    <div>
      <Img
      fluid={props.hit.image.childImageSharp.fluid}
      />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.title}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
