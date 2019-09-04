import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../Globals/Map';
import PlacesAutoComplete from '../Globals/PlacesAutoComplete';

import { StyledPlacesWrapper } from './styles';
import MAP_INFO from '../../constants/mapInfo';

class Places extends Component {
  constructor(props) {
    super(props);
    const { lat, lng, zoom } = props;
    this.state = {
      lat,
      lng,
      zoom,
    };
    this.handleSetViewport = this.handleSetViewport.bind(this);
    this.handleSetLocation = this.handleSetLocation.bind(this);
    this.handleSetZoom = this.handleSetZoom.bind(this);
  }

  handleSetLocation(location) {
    const { latitude: lat, longitude: lng } = location;
    this.setState({
      lat,
      lng,
    });
  }

  handleSetZoom(zoom) {
    this.setState({
      zoom,
    });
  }

  handleSetViewport(viewport) {
    const { latitude, longitude, zoom } = viewport;

    this.handleSetZoom(zoom);
    this.handleSetLocation({ latitude, longitude });
  }

  render() {
    const { getPlaces } = this.props;
    const { lat, lng, zoom } = this.state;
    return (
      <StyledPlacesWrapper>
        <Map
          lat={lat}
          lng={lng}
          zoom={zoom}
          onSetViewport={this.handleSetViewport}
        />
        <PlacesAutoComplete
          onSetLocation={this.handleSetLocation}
          getPlaces={getPlaces}
          lat={lat}
          lng={lng}
        />
      </StyledPlacesWrapper>
    );
  }
}

Places.propTypes = {
  getPlaces: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

Places.defaultProps = {
  lat: MAP_INFO.viewport.latitude,
  lng: MAP_INFO.viewport.longitude,
  zoom: MAP_INFO.viewport.zoom,
};

export default Places;
