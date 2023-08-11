import { PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";
import { call, put, takeLatest } from "redux-saga/effects";
import { createBoardService } from "services/createBoardService";
import { getBoardsService } from "services/getBoardsService";
import { getOneBoardService } from "services/getOneBoardService";
import {
  getBoardsAction,
  getOneBoardAction,
  setBoardAction,
} from "store/actions";
import {
  setBoard,
  setBoardToBoards,
  setCurrentBoard,
} from "store/slices/boardSlice";
import { IBoardData, IBoardDataAction, IBoardResponse } from "store/types";

function* setBoardSaga(action: PayloadAction<IBoardDataAction>) {
  try {
    const data: IBoardResponse = yield call(
      createBoardService,
      action.payload.board_data,
    );
    put(setBoardToBoards(data));
    action.payload.navigate(`/${data.id}`);
  } catch (e: any) {
    return e.message;
  }
}

function* getBoardSaga(action: any) {
  try {
    const { data } = yield call(getBoardsService);

    yield put(setBoard(data));
  } catch (err) {
    return err;
  }
}

function* getOneSaga(action: PayloadAction<{ id: string }>) {
  try {
    const { data } = yield call(getOneBoardService, action.payload.id);
    console.log("data ->", data);

    yield put(setCurrentBoard(data));
  } catch (err) {
    return err;
  }
}

export function* watchBoardSaga() {
  yield takeLatest(setBoardAction.type, setBoardSaga);
  yield takeLatest(getBoardsAction.type, getBoardSaga);
  yield takeLatest(getOneBoardAction.type, getOneSaga);
}
