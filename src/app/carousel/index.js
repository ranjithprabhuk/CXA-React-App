import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, FormControl, InputAdornment, InputLabel, Input, IconButton, CircularProgress, Button } from '@material-ui/core';
import './carousel.scss'

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 1,
      imagesPerPage: 20,
    }
  }

  componentWillMount() {
    const { images, getImages } = this.props
    const { pageNo, imagesPerPage, searchText } = this.state
    if (images && images.length === 0) {
      getImages(pageNo, imagesPerPage)
    }
  }

  render() {
    const { images } = this.props

    return (
      <div className='carousel'>
      Carousel {images.length}
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;


