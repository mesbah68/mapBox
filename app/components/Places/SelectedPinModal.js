/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import {
  StyledModalWrapper,
  ModalStyles,
  StyledPinModalLabel,
  StyledAutoCompleteButton,
} from './styles';

const MapLocationModal = props => {
  const { onSetPinModalVisibility, selectedMarker, onDeletePlace } = props;
  const { locationName, locationInfo } = selectedMarker;
  return (
    <div>
      <ReactModal
        isOpen
        onRequestClose={() => onSetPinModalVisibility(false)}
        ariaHideApp={false}
        style={ModalStyles}
      >
        <StyledModalWrapper>
          <StyledPinModalLabel>name : {locationName}</StyledPinModalLabel>
          <StyledPinModalLabel>info : {locationInfo}</StyledPinModalLabel>
          <StyledAutoCompleteButton>
            <button
              className="delete"
              onClick={() => {
                onDeletePlace(selectedMarker);
                onSetPinModalVisibility(false);
              }}
            >
              delete
            </button>
          </StyledAutoCompleteButton>
        </StyledModalWrapper>
      </ReactModal>
    </div>
  );
};

MapLocationModal.propTypes = {
  onSetPinModalVisibility: PropTypes.func,
  selectedMarker: PropTypes.object,
  onDeletePlace: PropTypes.func.isRequired,
};

MapLocationModal.defaultProps = {
  onSetPinModalVisibility: () => {},
};

export default MapLocationModal;
