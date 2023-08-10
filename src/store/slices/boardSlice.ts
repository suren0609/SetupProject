import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoardData, IBoardSliceInititalState } from "store/types";

const initialState: IBoardSliceInititalState = {
  boardData: [],
  createBoardSelect: "Workspace",
  currentBg: "bg6",
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
  },
});

export const { setBoardSelect, setCurrentBg, setBoard } = boardSlice.actions;
