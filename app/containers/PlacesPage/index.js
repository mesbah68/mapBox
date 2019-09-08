import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import placesActions from '../../ducks/places/actions';

import placesSelectors from '../../ducks/places/selectors';

// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Places from './../../components/Places';

import { StyledPlacesContainer } from './styles';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends Component {
  render() {
    const { getPlaces, addPlace, places, deletePlace } = this.props;
    // console.log(places);
    return (
      <StyledPlacesContainer>
        <Places
          getPlaces={getPlaces}
          onAddPlace={addPlace}
          places={places}
          deletePlace={deletePlace}
        />
      </StyledPlacesContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPlaces: payload => dispatch(placesActions.getPlaces(payload)),
  addPlace: payload => dispatch(placesActions.addPlace(payload)),
  deletePlace: payload => dispatch(placesActions.deletePlace(payload)),
});

const mapStateToProps = state => ({
  places: placesSelectors.places(state),
});

PlacesPage.propTypes = {
  getPlaces: PropTypes.func,
  addPlace: PropTypes.func,
  deletePlace: PropTypes.func,
  places: PropTypes.array,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PlacesPage),
);
