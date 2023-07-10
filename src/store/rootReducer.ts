import { combineReducers } from "@reduxjs/toolkit";
import { isLoadingSlice, isMenuActiveSlice, postSlice } from "./slices";

export const rootReducer = combineReducers({
  [postSlice.name]: postSlice.reducer,
  [isLoadingSlice.name]: isLoadingSlice.reducer,
  [isMenuActiveSlice.name]: isMenuActiveSlice.reducer,
});
