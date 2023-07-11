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
