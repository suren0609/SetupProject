import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { createTaskService } from "services/createTaskService";
import { getTasksService } from "services/getTasksService";
import { createTaskAction, getTasksAction } from "store/actions";
import { setAddCardActive } from "store/slices/popupSlice";
import { setAddTaskLoading, setTasks } from "store/slices/taskSlice";
import { ITaskData } from "store/types";

function* getTasksSaga(action: PayloadAction<{ categoryId: number }>) {
  try {
    const data: ITaskData[] = yield call(
      getTasksService,
      action.payload.categoryId,
    );

    yield put(setTasks({ data, categoryId: action.payload.categoryId }));
  } catch (err) {
    return err;
  }
}

function* createTaskSaga(action: PayloadAction<ITaskData>) {
  try {
    const { data } = yield call(createTaskService, action.payload);
    const tasks: ITaskData[] = yield call(
      getTasksService,
      action.payload.categoryId,
    );

    console.log(tasks);

    yield put(setTasks({ data: tasks, categoryId: action.payload.categoryId }));
    yield put(setAddTaskLoading(false));
    yield put(setAddCardActive(false));
  } catch (err) {
    return err;
  }
}

export function* watchTaskSaga() {
  yield takeLatest(getTasksAction.type, getTasksSaga);
  yield takeLatest(createTaskAction.type, createTaskSaga);
}
