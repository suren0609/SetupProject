import { configureStore } from "@reduxjs/toolkit";
import saga from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchCommonSaga } from "./sagas/userSaga";
import { rootReducer } from "./rootReducer";
import { watchBoardSaga } from "./sagas/boardSaga";
import { watchListSaga } from "./sagas/listSaga";
import { watchTaskSaga } from "./sagas/taskSaga";

function* RootSaga() {
  yield all([
    fork(watchCommonSaga),
    fork(watchBoardSaga),
    fork(watchListSaga),
    fork(watchTaskSaga),
  ]);
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
