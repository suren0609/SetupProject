import { createAction } from "@reduxjs/toolkit";
import {
  IBoardDataAction,
  IBoardResponse,
  IDeleteBoardAction,
  IListData,
} from "./types";

export const getUser = createAction("getUser");

export const clearStore = createAction("clearStore");

export const setBoardAction = createAction<IBoardDataAction>("setBoardAction");

export const getBoardsAction = createAction("getBoardsAction");

export const getOneBoardAction = createAction<{ id: string }>(
  "getOneBoardAction",
);

export const deleteBoardAction =
  createAction<IDeleteBoardAction>("deleteBoardAction");

export const changeBoardAction =
  createAction<Partial<IBoardResponse>>("changeBoardAction");

export const getListAction = createAction<{ boardId: string }>("getListAction");
export const createListAction =
  createAction<Partial<IListData>>("createListAction");
export const deleteListAction = createAction<IListData | {}>(
  "deleteListAction",
);
export const updateListAction = createAction<IListData>("updateListAction");
export const getTasksAction = createAction<{ listId: string }>(
  "getTasksAction",
);
