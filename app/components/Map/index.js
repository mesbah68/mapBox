import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import markerIcon from '../../resources/images/marker-icon.png';

import { StyledMapWrapper, StyledMarkerWrapper } from './styles';

const token = process.env.MAP_BOX_API_KEY;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 35.6967329,
        longitude: 51.2097323,
        zoom: 11,
      },
    };
  }

  render() {
    const { viewport: currentViewport } = this.state;
    const { latitude, longitude, zoom } = currentViewport;
    return (
      <StyledMapWrapper>
        <ReactMapGL
          mapboxApiAccessToken={token}
          latitude={latitude}
          longitude={longitude}
          zoom={zoom}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker latitude={latitude} longitude={longitude}>
            <StyledMarkerWrapper>
              <img src={markerIcon} alt="" />
            </StyledMarkerWrapper>
          </Marker>
        </ReactMapGL>
      </StyledMapWrapper>
    );
  }
}

export default Map;
