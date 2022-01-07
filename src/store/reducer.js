import { combineReducers } from "redux"
import { reducer as CounterReducer } from "store/counter/counter.reducers"

const reducer = combineReducers({
  counter: CounterReducer
})

export default reducer
