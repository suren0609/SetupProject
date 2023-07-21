import { combineReducers } from "@reduxjs/toolkit";
import { isLoadingSlice, tasksSlice, userSlice } from "./slices";

export const rootReducer = combineReducers({
  [isLoadingSlice.name]: isLoadingSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [tasksSlice.name]: tasksSlice.reducer,
});
