import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IListData, IListSliceInitialState, IListsState } from "store/types";

const initialState: IListSliceInitialState = {
  lists: [],
  addListLoading: false,
  currentList: {},
  deleteListLoading: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setLists: (state, { payload }: PayloadAction<IListData[]>) => {
      state.lists = payload;
    },
    addList: (state, { payload }: PayloadAction<IListData>) => {
      state.lists.push(payload);
    },
    setAddListLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.addListLoading = payload;
    },
    removeList: (state, { payload }: PayloadAction<IListData>) => {
      state.lists = state.lists.filter((list) => list.id !== payload.id);
    },
    setCurrentList: (state, { payload }: PayloadAction<IListData | {}>) => {
      state.currentList = payload;
    },
    setDeleteListLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.deleteListLoading = payload;
    },
  },
});

export const {
  setLists,
  addList,
  setAddListLoading,
  removeList,
  setCurrentList,
  setDeleteListLoading,
} = listSlice.actions;
