import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserData, IUserSliceInititalState } from "store/types";

const initialState: IUserSliceInititalState = {
  user: {
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    gender: "",
  },
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ data: IUserData }>) => {
      state.user = { ...payload.data };
    },
    setToken: (state, { payload }: PayloadAction<string | null>) => {
      state.token = payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
