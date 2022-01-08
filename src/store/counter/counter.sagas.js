import * as Actions from "store/counter/counter.actions"
import { put, takeLatest } from "redux-saga/effects"

const random = () => {
  if (Math.floor(Math.random() * 2) == 0) {
    return true
  } else {
    throw Error
  }
}

const tryToIncrement = () => {
  random()
}

const tryToDecrement = () => {
  random()
}

export function* incrementSaga() {
  try {
    yield tryToIncrement()
    yield put(Actions.incrementSuccess())
  } catch (e) {
    yield put(Actions.incrementFail())
  }
}

export function* decrementSaga() {
  try {
    yield tryToDecrement()
    yield put(Actions.decrementSuccess())
  } catch (e) {
    yield put(Actions.decrementFail())
  }
}

export function* saga() {
  yield takeLatest(Actions.types.INCREMENT, incrementSaga)
  yield takeLatest(Actions.types.DECREMENT, decrementSaga)
}
