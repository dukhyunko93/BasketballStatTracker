import { put, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* saveMatch() {
  yield put({ type: 'SAVE_MATCH', match })
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    saveMatch()
  ])
}