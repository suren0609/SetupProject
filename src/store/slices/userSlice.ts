import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserData } from "store/types";

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
    token: "",
  },
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ data: IUserData }>) => {
      state.user = { ...payload.data };
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
