import { RootState } from "store";
import { IListSliceInitialState, IState } from "./types";

export const stateSelector = (state: IState) => state;

export const userSelector = (state: any) => state.user.user;

export const taskCardPosSelector = (state: any) =>
  state.tasksSlice.taskCardPosition;

export const userProfileActiveSelector = (state: any) =>
  state.userPopup.isUserProfileActive;

export const userProfilePosSelector = (state: any) =>
  state.userPopup.userProfilePos;

export const taskDetailsActiveSelector = (state: any) =>
  state.tasksSlice.isTaskDetailsActive;

export const taskCardActiveSelector = (state: any) =>
  state.tasksSlice.isTaskCardActive;

export const isTaskTemplateSelector = (state: any) =>
  state.tasksSlice.isTaskTemplate;
export const popupState = (state: RootState) => state.popup;
export const boardState = (state: any) => state.board;

export const listState = (state: RootState) => state.list;

export const taskState = (state: RootState) => state.tasksSlice;
