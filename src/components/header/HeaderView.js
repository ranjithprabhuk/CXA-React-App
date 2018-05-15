import React, { Component } from 'react';  //eslint-disable-line
import { history } from '../../redux/store';

class HeaderView extends Component {

  /**
   * Render Header
   * @return {JSX} Rendered Header
   */

  render() {
    return (
      <div className='header'>
        <ul className = 'topRightMenu'>
          <li onClick={() => history.push('/')}> Spotify</li>
          <li onClick={() => history.push('/carousel')}> Carousel </li>
          <li onClick={() => history.push('/auto-complete')}> Auto Complete </li>
        </ul>
      </div>
    );
  }
}
export default HeaderView;
