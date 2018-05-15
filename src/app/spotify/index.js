import React, { Component } from 'react';
import { Grid, Paper, Card, CardContent, CardMedia, CardActions, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { constructImageSource } from '../../utils'
import './spotify.scss'

class Spotify extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 1,
      imagesPerPage: 20,
      currentScrollPosition: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    const pos = event.currentTarget.scrollTop - this.state.currentScrollPosition;

    if (pos > 250) {
      this.setState(value => { return { currentScrollPosition: pos, pageNo: ++value.pageNo } });
      this.props.getImages(this.state.pageNo, this.state.imagesPerPage);
    }
  }

  componentWillMount() {
    const { images, getImages } = this.props
    const { pageNo, imagesPerPage } = this.state
    if (images && images.length === 0) {
      getImages(pageNo, imagesPerPage)
      this.setState(value => { return { pageNo: ++value.pageNo } });
    }
  }

  updateFavorites(index) {
    this.props.updateFavorites(index)
  }

  render() {
    const { images, updateFavorites } = this.props

    return (
      <div className="root" onScroll={this.handleScroll}>
        <Grid container>
          {images.map((image, index) =>
            <Grid item xs={12} sm={4} md={3}>
              <Card className="card">
                <CardMedia
                  className="media"
                  image={constructImageSource(image)}
                  title={image.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h5">
                    {image.title.length > 10 ? image.title.slice(0, 10) + '...' : image.title}
                  </Typography>
                </CardContent>
                <CardActions className="card-actions">
                  <IconButton aria-label="Add to favorites" onClick={() => updateFavorites(index)}>
                    <FavoriteIcon color={image.isfamily ? 'secondary' : 'default'} />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="View Image">
                    <RemoveRedEye />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default Spotify;
