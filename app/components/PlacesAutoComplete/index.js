import React, { Component } from 'react';
import { connect } from 'react-redux';
import placesActions from '../../ducks/places/actions';

// import PropTypes from 'prop-types';

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
    };
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeValue(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = this.state;
    const { getPlaces } = this.props;
    getPlaces({
      query,
      onSuccess: () => {},
      onFailed: message => {
        console.log('onFailed Callback', message);
      },
    });
  }

  componentDidMount() {
    // console.log(this.state.query);
  }

  render() {
    const { query } = this.state;
    return (
      <StyledAutoCompleteWrapper>
        <StyledAutoCompleteForm onSubmit={this.handleSubmit}>
          <input
            placeholder="search"
            value={query}
            onChange={this.handleChangeValue}
          />
          <StyledAutoCompleteButton>
            <button type="submit">submit</button>
          </StyledAutoCompleteButton>
        </StyledAutoCompleteForm>
      </StyledAutoCompleteWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPlaces: payload => dispatch(placesActions.getPlaces(payload)),
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlacesAutoComplete);
