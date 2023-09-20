import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "store";
import { ITaskData, ITaskSliceInitialState } from "store/types";

const tasksAdapter = createEntityAdapter<ITaskData>({
  selectId: (task) => task.id,
});

export const tasksSelector = tasksAdapter.getSelectors(
  (state: RootState) => state.tasksSlice.tasks,
);

const initialState: ITaskSliceInitialState = {
  isTaskDetailsActive: false,
  isTaskCardActive: false,
  taskCardPosition: { top: 0, left: 0 },
  isTaskTemplate: false,
  addTaskLoading: false,
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    tasks: tasksAdapter.getInitialState(),
    ...initialState,
  },
  reducers: {
    setTasks: (
      state,
      { payload }: PayloadAction<{ data: ITaskData[]; categoryId: number }>,
    ) => {
      tasksAdapter.setAll(state.tasks, payload.data);
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
