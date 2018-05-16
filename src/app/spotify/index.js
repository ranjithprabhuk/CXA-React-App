import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Card, CardContent, CardMedia, CardActions, IconButton, Typography, FormControl, InputAdornment, InputLabel, Input, CircularProgress } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import ShareIcon from '@material-ui/icons/Share';
import Search from '@material-ui/icons/Search';
import { constructImageSource } from '../../utils';
import { ImageContainer } from '../../components/image-container'
import './spotify.scss'

class Spotify extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 1,
      imagesPerPage: 20,
      currentScrollPosition: 0,
      searchText: '',
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.searchImages = this.searchImages.bind(this)
  }

  handleScroll(event) {
    const pos = event.currentTarget.scrollTop - this.state.currentScrollPosition

    if (pos > 250) {
      this.setState(value => { return { currentScrollPosition: pos, pageNo: ++value.pageNo } })
      this.props.getImages(this.state.pageNo, this.state.imagesPerPage, this.searchText)
    }
  }

  handleChange(event) {
    this.setState({ searchText: event.currentTarget.value })
  }

  searchImages() {
    this.setState({ pageNo: 1 });
    setTimeout(() => {
      const { pageNo, imagesPerPage, searchText } = this.state
      this.props.getImages(pageNo, imagesPerPage, searchText)
      this.setState({ pageNo: 2 });
    })
  }

  componentWillMount() {
    const { images, getImages } = this.props
    const { pageNo, imagesPerPage, searchText } = this.state
    if (images && images.length === 0) {
      getImages(pageNo, imagesPerPage, searchText)
      this.setState(value => { return { pageNo: ++value.pageNo } })
    }
  }

  renderImages() {
    const { images, updateFavorites } = this.props

    return (
      <div className="image-container" onScroll={this.handleScroll}>
        <ImageContainer images={images} updateFavorites={updateFavorites} />
      </div>
    )
  }

  render() {
    const { images, updateFavorites, isFetchingImages } = this.props

    return (
      <div style={{ marginTop: 80 }}>
        <Grid container className='search-container'>
          <Grid item xs={12} sm={10} md={8}>
            <FormControl fullWidth>
              <InputLabel htmlFor="Search">Search</InputLabel>
              <Input
                id='search'
                type='text'
                value={this.state.searchText}
                onChange={(e) => this.handleChange(e)}
                disabled={this.props.isFetchingImages}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Search"
                      onClick={this.searchImages}
                    >
                      {<Search />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        {isFetchingImages ? <CircularProgress color="secondary" /> : this.renderImages()}

      </div>
    );
  }
}

Spotify.propTypes = {
  isFetchingImages: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
};

export default Spotify;


