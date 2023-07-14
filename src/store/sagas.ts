import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";
import * as sliceActions from "./slices";
import { IUserData } from "./types";

function* getUser(action: ReturnType<typeof actions.getUser>) {
  try {
    const { data }: AxiosResponse<IUserData> = yield axios.get(
      "https://young-citadel-44598.herokuapp.com/user",
      { withCredentials: true },
    );

    yield put(sliceActions.setUser({ data }));
  } catch (err) {
    console.log("error ->", err);
  }
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getUser.type, getUser);
}
