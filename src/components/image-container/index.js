import React, { Component } from 'react';
import { Grid, Card, CardContent, CardMedia, CardActions, IconButton, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import ShareIcon from '@material-ui/icons/Share';
import { constructImageSource, renderTitle } from '../../utils';
import './image-container.scss';

export const ImageContainer = ({ images, updateFavorites }) => (
  <Grid container>
    {images.map((image, index) =>
      <Grid item xs={12} sm={4} md={3}>
        <Card className="card animated fadeIn">
          <CardMedia
            className="media"
            image={constructImageSource(image)}
            title={image.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h5">
              {renderTitle(image.title)}
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
);

export default ImageContainer;