import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getTasksService } from "services/getTasksService";
import { getTasksAction } from "store/actions";
import { setTasks } from "store/slices/taskSlice";

function* getTasksSaga(action: PayloadAction<{ listId: string }>) {
  try {
    const { data } = yield call(getTasksService, action.payload.listId);

    yield put(setTasks(data));
  } catch (err) {
    return err;
  }
}

export function* watchTaskSaga() {
  yield takeLatest(getTasksAction.type, getTasksSaga);
}
