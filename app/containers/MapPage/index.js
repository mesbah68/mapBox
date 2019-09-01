import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Map from '../../components/Map';
import PlacesAutoComplete from '../../components/PlacesAutoComplete';

import { StyledMapContainer } from './styles';

/* eslint-disable react/prefer-stateless-function */
class CategoriesPage extends Component {
  render() {
    return (
      <StyledMapContainer>
        <Map />
        <PlacesAutoComplete />
      </StyledMapContainer>
    );
  }
}

export default CategoriesPage;
