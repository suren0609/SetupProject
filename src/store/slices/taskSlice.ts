import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

export const {
  setTaskDetailsActive,
  setTaskCardActive,
  setTaskCardPosition,
  setTaskTemplate,
} = tasksSlice.actions;
