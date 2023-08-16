import { PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";
import { bg1 } from "imagesUrls";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { changeBoardService } from "services/changeBoardService";
import { createBoardService } from "services/createBoardService";
import { deleteBoardService } from "services/deleteBoardService";
import { getBoardsService } from "services/getBoardsService";
import { getOneBoardService } from "services/getOneBoardService";
import {
  changeBoardAction,
  deleteBoardAction,
  getBoardsAction,
  getOneBoardAction,
  setBoardAction,
} from "store/actions";
import {
  setBoard,
  setBoardToBoards,
  setCurrentBoard,
  updateBoards,
} from "store/slices/boardSlice";
import {
  IBoardData,
  IBoardDataAction,
  IBoardResponse,
  IDeleteBoardAction,
} from "store/types";

function* setBoardSaga(action: PayloadAction<IBoardDataAction>) {
  try {
    const data: IBoardResponse = yield call(
      createBoardService,
      action.payload.board_data,
    );
    yield put(setBoardToBoards(data));
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
    yield put(setCurrentBoard(data));
  } catch (err) {
    return err;
  }
}

function* deleteSaga(action: PayloadAction<IDeleteBoardAction>) {
  try {
    yield call(deleteBoardService, action.payload.id);

    const { boardData, currentBoard } = yield select((state) => state.board);

    const newBoards = boardData.filter(
      (board: IBoardResponse) => board.id !== action.payload.id,
    );
    const curId = currentBoard.id;

    yield put(setBoard(newBoards));

    if (action.payload.id === curId) {
      yield put(
        setCurrentBoard({
          name: "",
          background: bg1,
          userId: 0,
          sortId: 0,
          id: 0,
        }),
      );
      action.payload.navigate(`/`);
    }
  } catch (err) {
    return err;
  }
}

function* changeSaga(action: PayloadAction<IBoardResponse>) {
  try {
    const data: IBoardResponse = yield call(changeBoardService, action.payload);
    const { editableBoard, boardData } = yield select((state) => state.board);
    const index = boardData.indexOf(editableBoard);

    console.log(data);

    yield put(updateBoards({ index, board: data }));
  } catch (err) {
    return err;
  }
}

export function* watchBoardSaga() {
  yield takeLatest(setBoardAction.type, setBoardSaga);
  yield takeLatest(getBoardsAction.type, getBoardSaga);
  yield takeLatest(getOneBoardAction.type, getOneSaga);
  yield takeLatest(deleteBoardAction.type, deleteSaga);
  yield takeLatest(changeBoardAction.type, changeSaga);
}
