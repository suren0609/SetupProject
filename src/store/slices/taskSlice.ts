import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskData, ITaskSliceInitialState } from "store/types";

const initialState: ITaskSliceInitialState = {
  tasks: {},
  isTaskDetailsActive: false,
  isTaskCardActive: false,
  taskCardPosition: { top: 0, left: 0 },
  isTaskTemplate: false,
  addTaskLoading: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (
      state,
      { payload }: PayloadAction<{ data: ITaskData[]; categoryId: number }>,
    ) => {
      state.tasks[payload.categoryId] = payload.data;
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
    setAddTaskLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.addTaskLoading = payload;
    },
  },
});

export const {
  setTasks,
  setTaskDetailsActive,
  setTaskCardActive,
  setTaskCardPosition,
  setTaskTemplate,
  setAddTaskLoading,
} = tasksSlice.actions;
