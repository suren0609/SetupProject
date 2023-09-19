import axios from "axios";
import { ITaskData } from "store/types";
import { tasksUrl } from "utils/apiUrls";

export const getTasksService = async (categorieId: number) => {
  const res = await axios.get(`${tasksUrl}/${categorieId}`, {
    withCredentials: true,
  });

  return res.data;
};
