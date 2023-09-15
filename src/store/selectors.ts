import { RootState } from "store";
import { IListSliceInitialState, IState } from "./types";

export const stateSelector = (state: IState) => state;

export const userSelector = (state: any) => state.user.user;

export const taskCardPosSelector = (state: any) => state.tasks.taskCardPosition;

export const userProfileActiveSelector = (state: any) =>
  state.userPopup.isUserProfileActive;

export const userProfilePosSelector = (state: any) =>
  state.userPopup.userProfilePos;

export const taskDetailsActiveSelector = (state: any) =>
  state.tasks.isTaskDetailsActive;

export const taskCardActiveSelector = (state: any) =>
  state.tasks.isTaskCardActive;

export const isTaskTemplateSelector = (state: any) =>
  state.tasks.isTaskTemplate;
export const popupState = (state: RootState) => state.popup;
export const boardState = (state: any) => state.board;

export const listState = (state: RootState) => state.list;
