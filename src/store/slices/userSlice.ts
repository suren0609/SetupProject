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
  },
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ data: IUserData }>) => {
      state.user = { ...payload.data };
    },
  },
});

export const { setUser } = userSlice.actions;
