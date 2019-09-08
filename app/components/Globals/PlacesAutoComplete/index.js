import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlacesAutoCompleteSuggestion from './PlacesAutoCompleteSuggestion';

import {
  StyledAutoCompleteWrapper,
  StyledAutoCompleteForm,
  StyledAutoCompleteButton,
} from './styles';
// import PlacesAutoCompleteForm from './PlacesAutoCompleteForm';

class PlacesAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestionItems: [],
      placesAutoCompleteSuggestionVisibility: false,
    };

    this.node = null;

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetSuggestionItems = this.handleSetSuggestionItems.bind(this);
    this.handleSetPlacesAutoCompleteSuggestionVisibility = this.handleSetPlacesAutoCompleteSuggestionVisibility.bind(
      this,
    );
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.handleSetPlacesAutoCompleteSuggestionVisibility(false);
    }
  }

  handleChangeValue(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleSetSuggestionItems(predictions, callback = () => {}) {
    this.setState(
      {
        suggestionItems: predictions,
      },
      callback,
    );
  }

  handleSetPlacesAutoCompleteSuggestionVisibility(
    placesAutoCompleteSuggestionVisibility,
    callBack = () => {},
  ) {
    this.setState(
      {
        placesAutoCompleteSuggestionVisibility,
      },
      callBack,
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { query } = this.state;
    const { getPlaces, lat, lng } = this.props;

    getPlaces({
      query,
      lat,
      lng,
      onSuccess: predictions => {
        this.handleSetSuggestionItems(predictions);
        console.log(this.state.suggestionItems);
      },
      onFailed: message => {
        // eslint-disable-next-line no-console
        console.log('onFailed Callback', message);
      },
    });
  }

  render() {
    const {
      query,
      suggestionItems,
      placesAutoCompleteSuggestionVisibility,
    } = this.state;

    const { onSetLocation } = this.props;
    return (
      <StyledAutoCompleteWrapper
        innerRef={node => {
          this.node = node;
        }}
      >
        <StyledAutoCompleteForm onSubmit={this.handleSubmit}>
          <input
            placeholder="search"
            value={query}
            onChange={this.handleChangeValue}
            onFocus={() =>
              this.handleSetPlacesAutoCompleteSuggestionVisibility(true)
            }
          />
          <StyledAutoCompleteButton>
            <button type="submit">submit</button>
          </StyledAutoCompleteButton>
        </StyledAutoCompleteForm>
        {placesAutoCompleteSuggestionVisibility ? (
          <PlacesAutoCompleteSuggestion
            onSetLocation={onSetLocation}
            suggestionItems={suggestionItems}
            onSetAutoCompleteSuggestionVisibility={
              this.handleSetPlacesAutoCompleteSuggestionVisibility
            }
          />
        ) : (
          ''
        )}
      </StyledAutoCompleteWrapper>
    );
  }
}

PlacesAutoComplete.propTypes = {
  getPlaces: PropTypes.func,
  lat: PropTypes.number,
  lng: PropTypes.number,
  onSetLocation: PropTypes.func,
};

export default PlacesAutoComplete;
