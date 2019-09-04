import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../Globals/Map';
import PlacesAutoComplete from '../Globals/PlacesAutoComplete';

import { StyledPlacesWrapper, StyledModalWrapper } from './styles';
import MAP_INFO from '../../constants/mapInfo';

import ReactModal from 'react-modal';

const ModalStyles = {
  overlay: {
    zIndex: '9999999',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Places extends Component {
  constructor(props) {
    super(props);
    const { lat, lng, zoom } = props;
    this.state = {
      lat,
      lng,
      zoom,
      modalIsOpen: false,
    };

    this.handleSetViewport = this.handleSetViewport.bind(this);
    this.handleSetLocation = this.handleSetLocation.bind(this);
    this.handleSetZoom = this.handleSetZoom.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleModalShow = this.handleModalShow.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalShow() {
    this.setState({
      modalIsOpen: true,
    });
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
    });
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
    this.handleModalShow();
  }

  render() {
    const { getPlaces } = this.props;
    const { lat, lng, zoom } = this.state;
    return (
      <StyledPlacesWrapper>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalClose}
          style={ModalStyles}
        >
          <StyledModalWrapper>
            <h1>modal content</h1>
          </StyledModalWrapper>
        </ReactModal>
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
};

Places.defaultProps = {
  lat: MAP_INFO.viewport.latitude,
  lng: MAP_INFO.viewport.longitude,
  zoom: MAP_INFO.viewport.zoom,
};

export default Places;
