import { PayloadAction } from "@reduxjs/toolkit";
import { toastParameters } from "helpers/toastAlertParams";
import { bg1 } from "imagesUrls";
import { toast } from "react-toastify";
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
  setBoardsLoading,
  setCreateBoardLoading,
  setCurrentBoard,
  setDeleteBoardLoading,
  updateBoards,
} from "store/slices/boardSlice";
import {
  setCreateBoardActive,
  setDeleteBoardPopupActive,
} from "store/slices/popupSlice";
import {
  IBoardDataAction,
  IBoardResponse,
  IDeleteBoardAction,
} from "store/types";

function* setBoardSaga(action: PayloadAction<IBoardDataAction>) {
  try {
    yield put(setCreateBoardLoading(true));
    const data: IBoardResponse = yield call(
      createBoardService,
      action.payload.board_data,
    );
    yield put(setBoardToBoards(data));
    yield put(setCreateBoardLoading(false));
    yield put(setCreateBoardActive(false));
    toast.success("New board created successfuly!", toastParameters);
    action.payload.navigate(`/board/${data.id}`);
  } catch (e: any) {
    yield put(setCreateBoardLoading(false));
    toast.success("Creating failed!", toastParameters);
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
    const { boardData } = yield select((state) => state.board);
    const prevBoard = boardData.find(
      (board: IBoardResponse) => board.id === Number(action.payload.id),
    );

    yield put(setCurrentBoard(prevBoard));
    const { data } = yield call(getOneBoardService, action.payload.id);

    yield put(setCurrentBoard(data));
    yield put(setBoardsLoading(false));
  } catch (err) {
    return err;
  }
}

function* deleteSaga(action: PayloadAction<IDeleteBoardAction>) {
  try {
    yield put(setDeleteBoardLoading(true));
    yield call(deleteBoardService, action.payload.id);

    const { boardData, currentBoard } = yield select((state) => state.board);

    const newBoards = boardData.filter(
      (board: IBoardResponse) => board.id !== action.payload.id,
    );
    const curId = currentBoard.id;

    yield put(setBoard(newBoards));
    yield put(setDeleteBoardLoading(false));
    yield put(setDeleteBoardPopupActive(false));

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
    yield put(setCreateBoardLoading(true));
    const data: IBoardResponse = yield call(changeBoardService, action.payload);
    const { editableBoard, boardData, currentBoard } = yield select(
      (state) => state.board,
    );
    const index = boardData.indexOf(editableBoard);

    yield put(updateBoards({ index, board: data }));
    yield put(setCreateBoardLoading(false));
    if (currentBoard.id === action.payload.id) {
      yield put(setCurrentBoard(data));
    }
  } catch (err) {
    yield put(setCreateBoardLoading(false));
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
