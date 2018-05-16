import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HeaderView } from '../components/header/HeaderView';
import SpotifyContainer from './spotify/Container';
import CarouselContainer from './carousel/Container';
import 'animate.css/animate.min.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <HeaderView />
          <Switch>
            <Route exact path="/spotify" component={SpotifyContainer} />
            <Route exact path="/carousel" component={CarouselContainer} />
            <Redirect from="/" to="spotify" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

