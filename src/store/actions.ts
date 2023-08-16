import { createAction } from "@reduxjs/toolkit";
import { IBoardData, IBoardDataAction, IDeleteBoardAction } from "./types";

export const getUser = createAction("getUser");

export const clearStore = createAction("clearStore");

export const setBoardAction = createAction<IBoardDataAction>("setBoardAction");

export const getBoardsAction = createAction("getBoardsAction");

export const getOneBoardAction = createAction<{ id: string }>(
  "getOneBoardAction",
);

export const deleteBoardAction =
  createAction<IDeleteBoardAction>("deleteBoardAction");

export const changeBoardAction = createAction<IBoardData>("changeBoardAction");
