import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CREATE_BOARD } from "store/types";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isAccessModifierPopupActive: false,
    accessModifierPos: {
      top: 0,
      left: 0,
    },
    isCreateBoardActive: false,
    createBoardPopupRender: CREATE_BOARD.CREATEBOARD,
    createBoardPopupPos: {
      top: 0,
      left: 0,
    },
    isBoardBackgroundActive: false,
    boardBackgroundPos: {
      top: 0,
      left: 0,
    },
    isMenuActive: {
      leftMenu: false,
      rightMenu: false,
    },
    isProfilePopupActive: false,
    isAddActive: false,
    closeBoardPopupPos: {
      top: 0,
      left: 0,
      boardName: "",
      boardId: 0,
    },
    isCloseBoardPopupActive: false,
    isDeleteBoardPopupActive: false,
    isEditActive: false,
    isDeleteListPopupActive: false,
  },
  reducers: {
    setAccessModifierActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isAccessModifierPopupActive = payload;
    },

    setAccessModifierPos: (
      state,
      { payload }: PayloadAction<{ top: number; left: number }>,
    ) => {
      state.accessModifierPos = payload;
    },
    setBoardPopupRender: (state, { payload }: PayloadAction<CREATE_BOARD>) => {
      state.createBoardPopupRender = payload;
    },

    setCreateBoardActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isCreateBoardActive = payload;
    },

    setCreateBoardPopupPos: (
      state,
      { payload }: PayloadAction<{ top: number; left: number }>,
    ) => {
      state.createBoardPopupPos = payload;
    },
    setBoardBackgroundActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isBoardBackgroundActive = payload;
    },
    setBoardBackgroundPos: (
      state,
      { payload }: PayloadAction<{ top: number; left: number }>,
    ) => {
      state.boardBackgroundPos = payload;
    },
    setIsMenuActive: (
      state,
      { payload }: PayloadAction<{ leftMenu: boolean; rightMenu: boolean }>,
    ) => {
      state.isMenuActive = payload;
    },

    setIsPopupActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isProfilePopupActive = payload;
    },
    setAddActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isAddActive = payload;
    },
    setCloseBoardPopupPos: (
      state,
      {
        payload,
      }: PayloadAction<{
        top: number;
        left: number;
        boardName: string;
        boardId: number;
      }>,
    ) => {
      state.closeBoardPopupPos = payload;
    },
    setCloseBoardPopupActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isCloseBoardPopupActive = payload;
    },
    setDeleteBoardPopupActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isDeleteBoardPopupActive = payload;
    },
    setEditActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isEditActive = payload;
    },
    setDeleteListPopupActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isDeleteListPopupActive = payload;
    },
  },
});

export const {
  setAccessModifierActive,
  setAccessModifierPos,
  setBoardPopupRender,
  setCreateBoardActive,
  setCreateBoardPopupPos,
  setBoardBackgroundActive,
  setBoardBackgroundPos,
  setIsMenuActive,
  setIsPopupActive,
  setAddActive,
  setCloseBoardPopupPos,
  setCloseBoardPopupActive,
  setDeleteBoardPopupActive,
  setEditActive,
  setDeleteListPopupActive,
} = popupSlice.actions;
