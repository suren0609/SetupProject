import { PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";
import { call, put, takeLatest } from "redux-saga/effects";
import { createBoardService } from "services/createBoardService";
import { getBoardsService } from "services/getBoardsService";
import { getBoardsAction, setBoardAction } from "store/actions";
import { setBoard } from "store/slices/boardSlice";
import { IBoardData, IBoardDataAction, IBoardResponse } from "store/types";

function* setBoardSaga(action: PayloadAction<IBoardDataAction>) {
  try {
    console.log("action -> ", action.payload.board_data);
    const data: IBoardResponse = yield call(
      createBoardService,
      action.payload.board_data,
    );
    action.payload.navigate(`/${data.id}`);
  } catch (e) {
    console.log("e -> ", e);
  }
}

function* getBoardSaga(action: any) {
  try {
    const { data } = yield call(getBoardsService);
    console.log(data);

    yield put(setBoard(data));
  } catch (err) {
    return err;
  }
}

export function* watchBoardSaga() {
  yield takeLatest(setBoardAction.type, setBoardSaga);
  yield takeLatest(getBoardsAction.type, getBoardSaga);
}
