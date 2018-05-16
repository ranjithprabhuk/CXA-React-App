import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { CircularProgress, Paper, Grid } from '@material-ui/core';
import { constructImageSource, renderTitle } from '../../utils';
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
    const images = this.props.images.slice(0, 20);

    return (
      <Grid container className='carousel-container'>
        <Grid item xs={12} sm={10} md={8}>
          <Paper>
            <Carousel showThumbs={false} transitionTime={1000} autoPlay interval={4000}>
              {images.map((image) =>
                <div>
                  <img className='image' src={constructImageSource(image)} />
                  <h4 className="animated bounceInUp legend title" title={image.title}>
                    {renderTitle(image.title)}
                  </h4>
                  <h5 className="animated bounceInDown legend view-image">
                    <a href={constructImageSource(image)} target='_blank'>
                      Click here to View the Image
                    </a>
                  </h5>
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


