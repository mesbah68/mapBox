/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import {
  StyledModalWrapper,
  StyledModalLabel,
  StyledModalInput,
  StyledModalSection,
  StyledAutoCompleteButton,
  ModalStyles,
} from './styles';

class MapLocationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationName: '',
      locationInfo: '',
    };

    this.handleChangeNameValue = this.handleChangeNameValue.bind(this);
    this.handleChangeInfoValue = this.handleChangeInfoValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeNameValue(e) {
    this.setState({
      locationName: e.target.value,
    });
  }

  handleChangeInfoValue(e) {
    this.setState({
      locationInfo: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onAddLocationPin, onSetModalVisibility } = this.props;
    const { locationName, locationInfo } = this.state;
    onAddLocationPin({ locationInfo, locationName }, () =>
      onSetModalVisibility(false),
    );
  }

  componentDidMount() {}

  render() {
    const { onSetModalVisibility } = this.props;
    const { locationName, locationInfo } = this.state;
    return (
      <div>
        <ReactModal
          isOpen
          onRequestClose={() => onSetModalVisibility(false)}
          ariaHideApp={false}
          style={ModalStyles}
        >
          <StyledModalWrapper onSubmit={this.handleSubmit}>
            <StyledModalSection>
              <StyledModalLabel>نام</StyledModalLabel>
              <StyledModalInput
                placeholder="name"
                value={locationName}
                onChange={this.handleChangeNameValue}
              />
            </StyledModalSection>
            <StyledModalSection>
              <StyledModalLabel>توضیحات</StyledModalLabel>
              <StyledModalInput
                placeholder="info"
                value={locationInfo}
                onChange={this.handleChangeInfoValue}
              />
            </StyledModalSection>
            <StyledAutoCompleteButton>
              <button className="confirm" type="submit">
                submit
              </button>
              <button
                className="cancle"
                onClick={() => onSetModalVisibility(false)}
              >
                cancle
              </button>
            </StyledAutoCompleteButton>
          </StyledModalWrapper>
        </ReactModal>
      </div>
    );
  }
}

MapLocationModal.propTypes = {
  onSetModalVisibility: PropTypes.func,
  onAddLocationPin: PropTypes.func.isRequired,
};

MapLocationModal.defaultProps = {
  onSetModalVisibility: () => {},
};

export default MapLocationModal;
