import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { createListService } from "services/createListService";
import { getListsService } from "services/getListsService";
import { createListAction, getListAction } from "store/actions";
import { addList, setAddListLoading, setLists } from "store/slices/listSlice";
import { setAddActive } from "store/slices/popupSlice";
import { IListData } from "store/types";

function* getListSaga(action: PayloadAction<{ boardId: string }>) {
  try {
    const { data } = yield call(getListsService, action.payload.boardId);

    yield put(setLists(data));
  } catch (err) {
    return err;
  }
}

function* createListSaga(action: PayloadAction<IListData>) {
  try {
    const { data } = yield call(createListService, action.payload);

    yield put(addList(data));
    yield put(setAddListLoading(false));
    yield put(setAddActive(false));
  } catch (err) {
    return err;
  }
}

export function* watchListSaga() {
  yield takeLatest(getListAction.type, getListSaga);
  yield takeLatest(createListAction.type, createListSaga);
}
