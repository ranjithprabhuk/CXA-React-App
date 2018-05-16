import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import { CircularProgress, Paper, Grid } from '@material-ui/core';
import './auto-complete.scss';

const getSuggestionValue = suggestion => suggestion.title;

const renderSuggestion = (suggestion, { query }) => {
  const suggestionText = suggestion.title;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className='suggestion-content'>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

class AutoComplete extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 1,
      imagesPerPage: 20,
      value: '',
      suggestions: []
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.images.filter(image =>
      image.title.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  componentWillMount() {
    const { images, getImages } = this.props
    const { pageNo, imagesPerPage, searchText } = this.state
    if (images && images.length === 0) {
      getImages(pageNo, imagesPerPage)
    }
  }

  renderAutoComplete() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type something',
      value,
      onChange: this.onChange
    };

    return (
      <Grid container className='auto-complete-container'>
        <Grid item xs={12} sm={10} md={8}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </Grid>
      </Grid>
    )
  }

  render() {
    const { images } = this.props

    return (
      <div className='auto-complete'>
        {images.length === 0 ?
          <CircularProgress className='circular-loader' color="primary" /> : this.renderAutoComplete()}
      </div>
    );
  }
}

AutoComplete.propTypes = {
  images: PropTypes.array.isRequired,
};

export default AutoComplete;


