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
      state.boardData.push(payload);
    },
    setCurrentBoard: (state, { payload }: PayloadAction<IBoardResponse>) => {
      console.log(payload);

      state.currentBoard = payload;
    },
  },
});

export const {
  setBoardSelect,
  setCurrentBg,
  setBoard,
  setBoardToBoards,
  setCurrentBoard,
} = boardSlice.actions;
