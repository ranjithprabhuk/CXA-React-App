import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import HomeStateReducer from '../app/home/HomeState';
import PostStateReducer from '../services/getPost';

export default combineReducers({
  router: routerReducer,
  home: HomeStateReducer,
  post: PostStateReducer
});
