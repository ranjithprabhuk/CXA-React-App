import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, FormControl, InputAdornment, InputLabel, Input, IconButton, CircularProgress, Button } from '@material-ui/core';
import FileDownload from '@material-ui/icons/FileDownload';
import Search from '@material-ui/icons/Search';
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

  renderSearchBox() {
    return (
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
    )
  }

  renderFooterButtons() {
    return (
      <div className='footer-container'>
        <Button variant="raised" color="primary">
          <FileDownload />Download CSV
          </Button>
      </div>
    )
  }

  render() {
    const { images, updateFavorites, isFetchingImages } = this.props

    return (
      <div className='spotify'>
        {this.renderSearchBox()}
        {isFetchingImages ? <CircularProgress color="secondary" /> : this.renderImages()}
        {this.renderFooterButtons()}
      </div>
    );
  }
}

Spotify.propTypes = {
  isFetchingImages: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
};

export default Spotify;


