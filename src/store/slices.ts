import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { clearStore } from "./actions";
import { PostType } from "./types";

export const postSlice = createSlice({
  name: "posts",
  initialState: [] as Array<PostType>,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<Array<PostType>>) => payload,
    removePost: (state, { payload }: PayloadAction<number>) =>
      state.filter((item) => item.id !== payload),
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
});

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
});



export const { setPosts, removePost } = postSlice.actions;

export const { setIsLoading } = isLoadingSlice.actions;


