import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";
import * as sliceActions from "./slices";
import { IUserData, PostType } from "./types";
import Cookies from "js-cookie";

function* getPostsApi(action: ReturnType<typeof actions.getPostsApi>) {
  yield put(sliceActions.setIsLoading(true));

  const {
    payload: { limit },
  } = action;

  try {
    const { data }: AxiosResponse<Array<PostType>> = yield axios.get(
      `https://jsonplaceholder.typicode.com/users/1/posts?_limit=${limit}`,
    );

    yield put(sliceActions.setPosts(data));
  } catch (err) {
    console.log(err);
  }

  yield put(sliceActions.setIsLoading(false));
}

function* getUser(action: ReturnType<typeof actions.getUser>) {
  try {
    console.log("token -> ", Cookies.get("token"));
    const { data }: AxiosResponse<IUserData> = yield axios.get(
      "https://young-citadel-44598.herokuapp.com/user",
      { withCredentials: true },
    );
    console.log("data -> ", data);

    yield put(sliceActions.setUser(data));
  } catch (err) {
    console.log("error ->", err);
  }
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getPostsApi.type, getPostsApi);
  yield takeLatest(actions.getUser.type, getUser);
}
