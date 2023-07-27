export type GetPostsApiPayload = {
  limit: number;
};

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
