export const types = {
  INCREMENT: "[Counter] Increment",
  INCREMENT_SUCCESS: "[Counter] Increment Success",
  INCREMENT_FAIL: "[Counter] Increment Fail",
  DECREMENT: "[Counter] Decrement",
  DECREMENT_SUCCESS: "[Counter] Decrement Success",
  DECREMENT_FAIL: "[Counter] Increment Fail"
}

export const increment = () => ({
  type: types.INCREMENT
})

export const incrementSuccess = () => ({
  type: types.INCREMENT_SUCCESS
})

export const incrementFail = () => ({
  type: types.INCREMENT_FAIL
})

export const decrement = () => ({
  type: types.DECREMENT
})

export const decrementSuccess = () => ({
  type: types.DECREMENT_SUCCESS
})

export const decrementFail = () => ({
  type: types.DECREMENT_FAIL
})

