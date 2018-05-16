import React from 'react';
import PropTypes from 'prop-types';
import { history } from '../../redux/store';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Toolbar, AppBar } from '@material-ui/core';

export const HeaderView = () =>
  <div>
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          CXA - Case Assignment
        </Typography>
        <Button color="inherit" onClick={() => history.push('/spotify')}>Spotify</Button>
        <Button color="inherit" onClick={() => history.push('/carousel')}>Carousel</Button>
        <Button color="inherit" onClick={() => history.push('/auto-complete')}>Auto Complete</Button>
      </Toolbar>
    </AppBar>
  </div>
