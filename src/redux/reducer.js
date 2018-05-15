import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SpotifyReducer from '../app/spotify/reducer';

export default combineReducers({
  router: routerReducer,
  spotify: SpotifyReducer,
});
