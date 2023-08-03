import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearStore } from "./actions";
import { IUserData } from "./types";
import { boolean } from "yup";

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

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    isTaskDetailsActive: false,
    isTaskCardActive: false,
    taskCardPosition: { top: 0, left: 0 },
    isTaskTemplate: false,
  },
  reducers: {
    setTaskDetailsActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isTaskDetailsActive = payload;
    },
    setTaskCardActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isTaskCardActive = payload;
    },
    setTaskCardPosition: (
      state,
      { payload }: PayloadAction<{ top: number; left: number }>,
    ) => {
      state.taskCardPosition = payload;
    },
    setTaskTemplate: (state, { payload }: PayloadAction<boolean>) => {
      state.isTaskTemplate = payload;
    },
  },
});

export const userPopupSlice = createSlice({
  name: "userPopup",
  initialState: {
    userProfilePos: {
      top: 0,
      left: 0,
    },
    isUserProfileActive: false,
  },
  reducers: {
    setProfilePosition: (
      state,
      { payload }: PayloadAction<{ top: number; left: number }>,
    ) => {
      state.userProfilePos = payload;
    },
    setIsUserProfileActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isUserProfileActive = payload;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export const { setUser } = userSlice.actions;
export const {
  setTaskDetailsActive,
  setTaskCardActive,
  setTaskCardPosition,
  setTaskTemplate,
} = tasksSlice.actions;
export const { setProfilePosition, setIsUserProfileActive } =
  userPopupSlice.actions;
