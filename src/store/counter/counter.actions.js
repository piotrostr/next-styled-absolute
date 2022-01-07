export const types = {
  INCREMENT: "[Counter] Increment",
  INCREMENT_SUCCESS: "[Counter] Increment Success",
  DECREMENT: "[Counter] Decrement",
  DECREMENT_SUCCESS: "[Counter] Decrement Success"
}

export const increment = () => ({
  type: types.INCREMENT
})

export const incrementSuccess = () => ({
  type: types.INCREMENT_SUCCESS
})

export const decrement = () => ({
  type: types.DECREMENT
})

export const decrementSuccess = () => ({
  type: types.DECREMENT_SUCCESS
})
