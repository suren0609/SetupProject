import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { bg1, bg6, img1 } from "imagesUrls";
import {
  IBoardData,
  IBoardResponse,
  IBoardSliceInititalState,
} from "store/types";

const initialState: IBoardSliceInititalState = {
  boardData: [],
  createBoardSelect: "Workspace",
  currentBg: bg6,
  currentBoard: { name: "", background: bg1, userId: 0, sortId: 0, id: 0 },
  editableBoard: {},
  createBoardLoading: false,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoardSelect: (state, { payload }: PayloadAction<string>) => {
      state.createBoardSelect = payload;
    },

    setCurrentBg: (state, { payload }: PayloadAction<string>) => {
      state.currentBg = payload;
    },

    setBoard: (state, { payload }: PayloadAction<IBoardData[]>) => {
      state.boardData = [...payload];
    },
    setBoardToBoards: (state, { payload }: PayloadAction<IBoardResponse>) => {
      state.boardData = [...state.boardData, payload];
    },
    setCurrentBoard: (state, { payload }: PayloadAction<IBoardResponse>) => {
      state.currentBoard = payload;
    },
    updateBoards: (
      state,
      { payload }: PayloadAction<{ index: number; board: IBoardResponse }>,
    ) => {
      state.boardData[payload.index] = payload.board;
    },
    setEditableBoard: (state, { payload }: PayloadAction<IBoardResponse>) => {
      state.editableBoard = payload;
    },
    setCreateBoardLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.createBoardLoading = payload;
    },
  },
});

export const {
  setBoardSelect,
  setCurrentBg,
  setBoard,
  setBoardToBoards,
  setCurrentBoard,
  updateBoards,
  setEditableBoard,
  setCreateBoardLoading,
} = boardSlice.actions;
