import { createSelector } from "@reduxjs/toolkit"

const counterState = state => state.counter

export const getCount = createSelector(
  counterState,
  state => state.count
)
