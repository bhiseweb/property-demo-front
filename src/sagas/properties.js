import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* watchFetchData() {
  yield takeLatest('LIST_PROPERTIES', fetchData)
}
