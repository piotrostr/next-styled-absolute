import { spawn } from "redux-saga/effects"
import { saga as CounterSaga } from "store/counter/counter.sagas"

export default function* saga() {
  yield spawn(CounterSaga)
}
