import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import placesActions from '../../ducks/places/actions';

// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Places from './../../components/Places';

import { StyledPlacesContainer } from './styles';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends Component {
  render() {
    const { getPlaces } = this.props;
    return (
      <StyledPlacesContainer>
        <Places getPlaces={getPlaces} />
      </StyledPlacesContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPlaces: payload => dispatch(placesActions.getPlaces(payload)),
});

const mapStateToProps = () => ({});

PlacesPage.propTypes = {
  getPlaces: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PlacesPage),
);
