import axios from "axios";
import { listsUrl } from "utils/apiUrls";

export const deleteListService = async (listId: string) => {
  const res = await axios.delete(`${listsUrl}${listId}`, {
    withCredentials: true,
  });
  return res;
};
