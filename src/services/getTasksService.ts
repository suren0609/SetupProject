import { EntityId } from "@reduxjs/toolkit";
import axios from "axios";
import { ITaskData } from "store/types";
import { tasksUrl } from "utils/apiUrls";

export const getTasksService = async (categorieId: number | EntityId) => {
  const res = await axios.get(`${tasksUrl}/${categorieId}`, {
    withCredentials: true,
  });

  return res.data;
};
