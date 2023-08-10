import { createAction } from "@reduxjs/toolkit";
import { IBoardData, IBoardDataAction } from "./types";

export const getUser = createAction("getUser");

export const clearStore = createAction("clearStore");

export const setBoardAction = createAction<IBoardDataAction>("setBoardAction");

export const getBoardsAction = createAction("getBoardsAction");
