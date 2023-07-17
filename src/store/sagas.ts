import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";
import * as sliceActions from "./slices";
import { IUserData } from "./types";
import { getUserService } from "services/getUserService";

function* getUser(action: ReturnType<typeof actions.getUser>) {
  try {
    const { data }: AxiosResponse<IUserData> = yield call(getUserService);

    yield put(sliceActions.setUser({ data }));
  } catch (err) {
    return err;
  }
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getUser.type, getUser);
}
