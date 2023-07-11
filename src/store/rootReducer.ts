import { combineReducers } from "@reduxjs/toolkit";
import { isLoadingSlice, postSlice } from "./slices";

export const rootReducer = combineReducers({
  [postSlice.name]: postSlice.reducer,
  [isLoadingSlice.name]: isLoadingSlice.reducer,
});
