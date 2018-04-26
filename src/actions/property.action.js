import { FETCH_PROPERTIES, ADD_PROPERTY, FETCH_STATS } from '../constants';

export const fetchProperties = () => {
  return {
    type: FETCH_PROPERTIES,
  }
}

export const createProperty = (data) => {
  return {
    type: ADD_PROPERTY,
    data
  }
}

export const fetchStats = () => {
  return {
    type: FETCH_STATS,
  }
}