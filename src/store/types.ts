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
  firstName: string;
  lastName: string;
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

export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  gender: string;
}
