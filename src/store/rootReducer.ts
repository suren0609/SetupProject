import { combineReducers } from "@reduxjs/toolkit";
import { isLoadingSlice, userSlice } from "./slices";

export const rootReducer = combineReducers({
  [isLoadingSlice.name]: isLoadingSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
