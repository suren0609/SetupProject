export type GetPostsApiPayload = {
  limit: number;
};

export interface IBoardSliceInititalState {
  boardData: IBoardData[];
  createBoardSelect: string;
  currentBg: string;
  currentBoard: Partial<IBoardResponse>;
  editableBoard: Partial<IBoardResponse>;
  createBoardLoading: boolean;
  getBoardLoading: boolean;
  deleteBoardLoading: boolean;
}

export interface ITaskData {
  title: string;
  description: string;
  date: string;
  deadline: string;
  listId: string;
  id: number;
}

export interface ITaskSliceInitialState {
  tasks: ITaskData[];
  isTaskDetailsActive: boolean;
  isTaskCardActive: boolean;
  taskCardPosition: { top: number; left: number };
  isTaskTemplate: boolean;
}

export interface IListSliceInitialState {
  lists: IListData[];
  addListLoading: boolean;
  currentList: IListData | {};
  deleteListLoading: boolean;
}

export interface IListsState {
  lists: IListData[];
}

export interface IListData {
  name: string;
  boardId: string;
  id: number;
  sortId: number;
}

export interface IUserSliceInititalState {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    age: string;
    gender: string;
  };
  token: null | string;
}

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface IState {
  posts: PostType[];
  isLoading: boolean;
  isMenuActive: boolean;
}

export interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserInitialState {
  user: IUserData;
}

export interface IUserData {
  firstname: string;
  lastname: string;
  email: string;
  age: string;
  gender: string;
}

export enum statusText {
  ok = "OK",
}

export interface IProp {
  popupRef: any;
}

export enum CREATE_BOARD {
  CREATEBOARD = "createBoard",
  BOARDFORM = "boardForm",
}

export interface IBoardData {
  name: string;
  background: string;
}

export interface IBoardResponse {
  name: string;
  background: string;
  userId: number;
  sortId: number;
  id: number;
}

export interface IBoardDataAction {
  board_data: IBoardData;
  navigate: (to: string, options?: object) => void;
}

export interface IDeleteBoardAction {
  id: number;
  navigate: (to: string, options?: object) => void;
}
