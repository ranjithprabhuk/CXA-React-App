import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {constructImageSource} from '../../utils'
import './spotify.scss'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  paper: {
    margin: 8,
  },
  card: {
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Spotify extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 0,
      imagesPerPage: 20,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    console.log('eventt', event.currentTarget.scrollTop);
  }

  componentWillMount() {
    const { images, getImages } = this.props
    const { pageNo, imagesPerPage } = this.state
    console.log('imagesssss', images)
    if (images && images.length === 0) {
      getImages(pageNo, imagesPerPage)
    }
  }

  render() {
    const { images } = this.props

    return (
      <div className="root">
        <Grid container>
          {images.map((image) =>
              <Grid item xs={12} sm={4} md={3}>
                <Card style={styles.card}>
                  <CardMedia
                    style={styles.media}
                    image={constructImageSource(image)}
                    title={image.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {image.title.length > 10 ? image.title.slice(0, 10) +'...' : image.title}
                </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
        </Grid>
      </div>
    );
  }
}

export default Spotify;
