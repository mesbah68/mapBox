import React from 'react';
import PropTypes from 'prop-types';

import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import markerIcon from '../../../resources/images/marker-icon.png';
import MAP_INFO from '../../../constants/mapInfo';

import { StyledMapWrapper, StyledMarkerWrapper } from './styles';

const token = process.env.MAP_BOX_API_KEY;

const Map = props => {
  const {
    lat,
    lng,
    zoom,
    onSetViewport,
    onclick,
    places,
    onMarkerClick,
  } = props;
  return (
    <StyledMapWrapper>
      <ReactMapGL
        mapboxApiAccessToken={token}
        latitude={lat}
        longitude={lng}
        zoom={zoom}
        onViewportChange={onSetViewport}
        onClick={onclick}
      >
        {places.map((marker, index) => (
          <Marker key={index} latitude={marker.lat} longitude={marker.lng}>
            <StyledMarkerWrapper onClick={() => onMarkerClick(marker)}>
              <img src={markerIcon} alt="" />
            </StyledMarkerWrapper>
          </Marker>
        ))}
      </ReactMapGL>
    </StyledMapWrapper>
  );
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
  onSetViewport: PropTypes.func.isRequired,
  onclick: PropTypes.func,
  onMarkerClick: PropTypes.func,
  places: PropTypes.array,
};

Map.defaultProps = {
  lat: MAP_INFO.viewport.latitude,
  lng: MAP_INFO.viewport.longitude,
  zoom: MAP_INFO.viewport.zoom,
  onclick: () => {},
  onMarkerClick: () => {},
};

export default Map;
