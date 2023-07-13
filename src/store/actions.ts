import { createAction } from "@reduxjs/toolkit";
import { GetPostsApiPayload } from "./types";

export const getPostsApi = createAction<GetPostsApiPayload>("getPostsApi");

export const getUser = createAction("getUser");

export const clearStore = createAction("clearStore");
