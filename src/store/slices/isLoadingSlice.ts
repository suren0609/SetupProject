import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearStore } from "store/actions";

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

export const { setIsLoading } = isLoadingSlice.actions;
