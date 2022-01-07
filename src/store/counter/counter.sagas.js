import * as Actions from "store/counter/counter.actions"
import { put, takeLatest } from "redux-saga/effects"

export function* incrementSaga() {
  console.log('asdf')
  try {
    yield put(Actions.incrementSuccess())
  } catch (e) {
  }
}

export function* decrementSaga() {
  yield put(Actions.decrementSuccess())
}

export function* saga() {
  yield takeLatest(Actions.types.INCREMENT, incrementSaga)
  yield takeLatest(Actions.types.DECREMENT, decrementSaga)
}
