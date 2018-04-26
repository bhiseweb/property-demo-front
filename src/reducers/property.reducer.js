import { FETCH_PROPERTIES_RECEIVED, ADD_PROPERTY_RECEIVED, ADD_PROPERTY_FAILED, FETCH_STATS_RECEIVED } from '../constants';

const initialState = { 
  properties: [],
  errors: null,
  stats: {},
  property: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_RECEIVED:
      return {...state, properties: action.data };
    case ADD_PROPERTY_RECEIVED:
      return { ...state, property: action.data, errors: null };
    case ADD_PROPERTY_FAILED:
      return {...state, errors: action.data };
    case FETCH_STATS_RECEIVED:
      return {...state, stats: action.data };
    default:
      return state;
  }
}