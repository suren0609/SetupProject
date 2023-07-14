import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearStore } from "./actions";
import { IUserData } from "./types";

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

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      gender: "",
    },
  },
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ data: IUserData }>) => {
      state.user = { ...payload.data };
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export const { setUser } = userSlice.actions;
