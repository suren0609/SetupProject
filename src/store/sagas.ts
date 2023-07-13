import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";
import * as sliceActions from "./slices";
import { IUserData, PostType } from "./types";

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
    const { data }: AxiosResponse<IUserData> = yield axios.get(
      "https://young-citadel-44598.herokuapp.com/user",
      {
        Cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY4OTE1NjAzMzI0NywiYWdlIjoiMjAyMy0wNy0yOCIsImVtYWlsIjoidmFoZUBtYWlsLnl1IiwiZ2VuZGVyIjoiTWFsZSIsImlhdCI6MTY4OTE2OTUyMywiZXhwIjoxNjg5MTczMTIzfQ.MgW51_yVozfqo4p_KKrZ7lFBj88tdpla2BlHEe89PQI",
      } as any,
    );
    console.log("data -> ", data);

    yield put(sliceActions.setUser(data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getPostsApi.type, getPostsApi);
  yield takeLatest(actions.getUser.type, getUser);
}
