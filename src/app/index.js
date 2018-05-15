import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderViewContainer from '../components/header/HeaderView';
import SpotifyContainer from './spotify/Container';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <main>
            <HeaderViewContainer />
            <Switch>
              <Route exact path="/spotify" component={SpotifyContainer} />
              <Redirect from="/" to="spotify" />
            </Switch>
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

