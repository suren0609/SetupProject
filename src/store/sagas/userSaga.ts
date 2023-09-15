import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { getUserService } from "services/getUserService";
import * as actions from "../actions";
import { IUserData } from "../types";
import { setUser } from "../slices/userSlice";
import { setIsLoading } from "store/slices/isLoadingSlice";

function* getUser(action: ReturnType<typeof actions.getUser>) {
  try {
    const { data }: AxiosResponse<IUserData> = yield call(getUserService);
    yield put(setUser({ data }));
    yield put(setIsLoading(true));
  } catch (err) {
    return err;
  }
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getUser.type, getUser);
}
