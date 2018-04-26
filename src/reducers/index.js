import { combineReducers } from 'redux';
import property from './property.reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  property,
  router: routerReducer
})
