import { types } from "store/counter/counter.actions"

const initialState = {
  count: 0,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1
      }
    case types.DECREMENT_SUCCESS:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
