import axios from "axios";
import { ITaskData } from "store/types";
import { tasksUrl } from "utils/apiUrls";

export const getTasksService = async (listId: string) => {
  const res = await axios.get(`${tasksUrl}${listId}`, {
    withCredentials: true,
  });

  return res;
};
