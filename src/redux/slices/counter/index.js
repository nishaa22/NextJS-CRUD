import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => 0
  }
})

export const { increment, decrement, reset } = CounterSlice.actions
export default CounterSlice.reducer