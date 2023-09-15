import { combineReducers } from "@reduxjs/toolkit";
import { isLoadingSlice } from "./slices/isLoadingSlice";
import { tasksSlice } from "./slices/taskSlice";
import { userPopupSlice } from "./slices/userPopupSlice";
import { userSlice } from "./slices/userSlice";
import { popupSlice } from "./slices/popupSlice";
import { boardSlice } from "./slices/boardSlice";
import { listSlice } from "./slices/listSlice";

export const rootReducer = combineReducers({
  [isLoadingSlice.name]: isLoadingSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [tasksSlice.name]: tasksSlice.reducer,
  [userPopupSlice.name]: userPopupSlice.reducer,
  [popupSlice.name]: popupSlice.reducer,
  [boardSlice.name]: boardSlice.reducer,
  [listSlice.name]: listSlice.reducer,
});
