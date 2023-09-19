import axios from "axios";
import { ITaskData } from "store/types";
import { tasksUrl } from "utils/apiUrls";

export const createTaskService = async (task: Partial<ITaskData>) => {
  const res = await axios.post(`${tasksUrl}`, task, {
    withCredentials: true,
  });

  return res;
};
