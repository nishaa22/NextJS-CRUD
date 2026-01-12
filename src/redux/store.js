import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer
  }
})