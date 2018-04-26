import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchPropertiesData, createPropertyWithData, fetchStatsData } from '../api/property';
import { FETCH_PROPERTIES_RECEIVED, FETCH_PROPERTIES, ADD_PROPERTY, ADD_PROPERTY_RECEIVED, 
  ADD_PROPERTY_FAILED, FETCH_STATS, FETCH_STATS_RECEIVED } from '../constants';

function* fetchProperties(action) { 
 const data = yield call(fetchPropertiesData);
  yield put({type: FETCH_PROPERTIES_RECEIVED, data});   
}

function* createProperty(action) {
  console.log(action);
  try {
  const data = yield call(createPropertyWithData, action.data);
  if(data.message)
    yield put({type: ADD_PROPERTY_FAILED, data});
  else
    yield put({type: ADD_PROPERTY_RECEIVED, data}); 
  } catch(e) {
    yield put({type: ADD_PROPERTY_FAILED, e}); 
  }
}

function* fetchStats(action) { 
 const data = yield call(fetchStatsData);
  yield put({type: FETCH_STATS_RECEIVED, data});   
}

export default function* rootSaga() {
  yield takeLatest(FETCH_PROPERTIES, fetchProperties);
  yield takeLatest(ADD_PROPERTY, createProperty);
  yield takeLatest(FETCH_STATS, fetchStats);
}
