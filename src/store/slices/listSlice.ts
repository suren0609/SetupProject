import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IListData, IListSliceInitialState, IListsState } from "store/types";

const initialState: IListSliceInitialState = {
  lists: {
    boardId: "",
    categories: [],
  },
  addListLoading: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setLists: (state, { payload }: PayloadAction<IListsState>) => {
      state.lists = payload;
    },
    addList: (state, { payload }: PayloadAction<IListData>) => {
      state.lists.categories.push(payload);
    },
    setAddListLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.addListLoading = payload;
    },
  },
});

export const { setLists, addList, setAddListLoading } = listSlice.actions;
