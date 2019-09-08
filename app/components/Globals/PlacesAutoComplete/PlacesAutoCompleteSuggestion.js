/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAutoCompleteSuggestionWrapper,
  StyledAutoCompleteSuggestion,
  StyledAutoCompleteSuggestionItems,
} from './styles';

const PlacesAutoCompleteSuggestion = props => {
  const {
    suggestionItems,
    onSetLocation,
    onSetAutoCompleteSuggestionVisibility,
  } = props;
  return (
    <StyledAutoCompleteSuggestionWrapper>
      {suggestionItems.length && suggestionItems ? (
        <StyledAutoCompleteSuggestion>
          {suggestionItems.map((suggestion, index) => (
            <StyledAutoCompleteSuggestionItems
              onClick={() => {
                onSetLocation({ ...suggestion.location });
                onSetAutoCompleteSuggestionVisibility(false);
              }}
              key={index}
            >
              {suggestion.name}
            </StyledAutoCompleteSuggestionItems>
          ))}
        </StyledAutoCompleteSuggestion>
      ) : (
        ''
      )}
    </StyledAutoCompleteSuggestionWrapper>
  );
};

PlacesAutoCompleteSuggestion.propTypes = {
  suggestionItems: PropTypes.array,
  onSetLocation: PropTypes.func,
  onSetAutoCompleteSuggestionVisibility: PropTypes.func,
};

PlacesAutoCompleteSuggestion.defaultProps = {
  suggestionItems: [],
};

export default PlacesAutoCompleteSuggestion;
