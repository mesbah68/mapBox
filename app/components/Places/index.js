import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../Globals/Map';
import PlacesAutoComplete from '../Globals/PlacesAutoComplete';
import MapLocationModal from './MapLocationModal';

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
      modalVisibility: false,
    };

    this.handleSetViewport = this.handleSetViewport.bind(this);
    this.handleSetLocation = this.handleSetLocation.bind(this);
    this.handleSetZoom = this.handleSetZoom.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleModalVisibility = this.handleModalVisibility.bind(this);
    this.handleAddLocationPin = this.handleAddLocationPin.bind(this);
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

  handleMapClick(e) {
    const [longitude, latitude] = e.lngLat;
    this.handleSetLocation({ latitude, longitude });
    this.handleModalVisibility(true);
  }
  handleModalVisibility(modalVisibility) {
    this.setState({
      modalVisibility,
    });
  }

  handleAddLocationPin(location, callback = () => {}) {
    const { locationName, locationInfo } = location;
    const { lat, lng } = this.state;
    const { onAddPlace } = this.props;
    onAddPlace({
      lat,
      lng,
      locationInfo,
      locationName,
    });
    setTimeout(callback, 0);
  }

  render() {
    const { getPlaces } = this.props;
    const { lat, lng, zoom, modalVisibility } = this.state;
    return (
      <StyledPlacesWrapper>
        {modalVisibility ? (
          <MapLocationModal
            onSetModalVisibility={this.handleModalVisibility}
            onAddLocationPin={this.handleAddLocationPin}
          />
        ) : (
          ''
        )}
        <Map
          lat={lat}
          lng={lng}
          zoom={zoom}
          onSetViewport={this.handleSetViewport}
          onclick={this.handleMapClick}
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
  onAddPlace: PropTypes.func.isRequired,
};

Places.defaultProps = {
  lat: MAP_INFO.viewport.latitude,
  lng: MAP_INFO.viewport.longitude,
  zoom: MAP_INFO.viewport.zoom,
};

export default Places;
