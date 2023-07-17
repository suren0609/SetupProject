import { configureStore } from "@reduxjs/toolkit";
import saga from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchCommonSaga } from "./sagas";
import { rootReducer } from "./rootReducer";

function* RootSaga() {
  yield all([fork(watchCommonSaga)]);
}

const sagaMiddleware = saga();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
