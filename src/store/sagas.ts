import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";
import * as sliceActions from "./slices";
import { PostType } from "./types";


function* getPostsApi(action: ReturnType<typeof actions.getPostsApi>) {
    yield put(sliceActions.setIsLoading(true));

    const {
        payload: { limit },
    } = action

    try {
        const { data }: AxiosResponse<Array<PostType>> = yield axios.get(`https://jsonplaceholder.typicode.com/users/1/posts?_limit=${limit}`);

        yield put(sliceActions.setPosts(data))
    } catch (err) {
        console.log(err);
    }

    yield put(sliceActions.setIsLoading(false));
}

export function* watchCommonSaga() {
    yield takeLatest(actions.getPostsApi.type, getPostsApi)
}
