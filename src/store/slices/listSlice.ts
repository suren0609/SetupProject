import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "store";
import { IListData, IListSliceInitialState, IListsState } from "store/types";

const listsAdapter = createEntityAdapter<IListData>({
  selectId: (list) => list.id,
});

export const listsSelector = listsAdapter.getSelectors(
  (state: RootState) => state.list.lists,
);

const initialState: IListSliceInitialState = {
  addListLoading: false,
  currentList: {},
  deleteListLoading: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: listsAdapter.getInitialState(),
    ...initialState,
  },
  reducers: {
    setLists: (state, { payload }: PayloadAction<IListData[]>) => {
      listsAdapter.setAll(state.lists, payload);
    },
    // addList: (state, { payload }: PayloadAction<IListData>) => {
    //   state.lists.push(payload);
    // },
    setAddListLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.addListLoading = payload;
    },
    // removeList: (state, { payload }: PayloadAction<IListData>) => {
    //   state.lists = state.lists.filter((list) => list.id !== payload.id);
    // },
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
  // addList,
  setAddListLoading,
  // removeList,
  setCurrentList,
  setDeleteListLoading,
} = listSlice.actions;
