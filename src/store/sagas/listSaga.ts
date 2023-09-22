import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { createListService } from "services/createListService";
import { deleteListService } from "services/deleteListService";
import { getListsService } from "services/getListsService";
import { updateListService } from "services/updateListService";
import {
  createListAction,
  deleteListAction,
  getListAction,
  updateListAction,
} from "store/actions";
import {
  setAddListLoading,
  setDeleteListLoading,
  setLists,
} from "store/slices/listSlice";
import {
  setAddActive,
  setDeleteListPopupActive,
} from "store/slices/popupSlice";
import { IListData } from "store/types";

function* getListSaga(action: PayloadAction<{ boardId: string }>) {
  try {
    const data: IListData[] = yield call(
      getListsService,
      action.payload.boardId,
    );

    yield put(setLists(data));
  } catch (err) {
    return err;
  }
}

function* createListSaga(action: PayloadAction<IListData>) {
  try {
    yield call(createListService, action.payload);
    const data: IListData[] = yield call(
      getListsService,
      action.payload.boardId,
    );
    // yield put(addList(data));
    yield put(setLists(data));
    yield put(setAddListLoading(false));
    yield put(setAddActive(false));
  } catch (err) {
    return err;
  }
}

function* deleteListSaga(action: PayloadAction<IListData>) {
  try {
    const { data } = yield call(
      deleteListService,
      action.payload?.id.toString(),
    );
    const listData: IListData[] = yield call(
      getListsService,
      action.payload?.boardId,
    );

    yield put(setLists(listData));
    yield put(setDeleteListPopupActive(false));
    yield put(setDeleteListLoading(false));
  } catch (err) {
    return err;
  }
}

function* updateListSaga(action: PayloadAction<IListData>) {
  try {
    const { data } = yield call(updateListService, action.payload);
    const listData: IListData[] = yield call(
      getListsService,
      action.payload?.boardId,
    );

    yield put(setLists(listData));
  } catch (err) {
    return err;
  }
}

export function* watchListSaga() {
  yield takeLatest(getListAction.type, getListSaga);
  yield takeLatest(createListAction.type, createListSaga);
  yield takeLatest(deleteListAction.type, deleteListSaga);
  yield takeLatest(updateListAction.type, updateListSaga);
}
