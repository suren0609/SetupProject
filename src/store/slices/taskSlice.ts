import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskData, ITaskSliceInitialState } from "store/types";

const initialState: ITaskSliceInitialState = {
  tasks: [],
  isTaskDetailsActive: false,
  isTaskCardActive: false,
  taskCardPosition: { top: 0, left: 0 },
  isTaskTemplate: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, { payload }: PayloadAction<ITaskData[]>) => {
      state.tasks = payload;
    },
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
  setTasks,
  setTaskDetailsActive,
  setTaskCardActive,
  setTaskCardPosition,
  setTaskTemplate,
} = tasksSlice.actions;
