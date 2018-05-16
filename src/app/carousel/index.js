import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { CircularProgress, Paper, Grid } from '@material-ui/core';
import { constructImageSource } from '../../utils';
import './carousel.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class CarouselComponent extends Component {
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

  renderCarousel() {
    return (
      <Grid container className='carousel-container'>
        <Grid item xs={12} sm={10} md={8}>
          <Paper>
            <Carousel showThumbs={false}>
              {this.props.images.map((image) =>
                <div>
                  <img className='image' src={constructImageSource(image)} />
                  <p className="legend">{image.title}</p>
                </div>
              )}
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
    )
  }

  render() {
    const { images } = this.props

    return (
      <div className='carousel'>
        {images.length === 0 ?
          <CircularProgress className='circular-loader' color="primary" /> : this.renderCarousel()}
      </div>
    );
  }
}

CarouselComponent.propTypes = {
  images: PropTypes.array.isRequired,
};

export default CarouselComponent;


