import React, { Component } from 'react';

class Spotify extends Component {
    componentDidMount() {
        this.props.getImages();
    }
  render() {
    return (
      <div>
        <h1>Spotify Page</h1>
      </div>
    );
  }
}
export default Spotify;
