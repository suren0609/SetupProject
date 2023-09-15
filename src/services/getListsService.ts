import axios from "axios";
import { listsUrl } from "utils/apiUrls";

export const getListsService = async (boardId: string) => {
  const res = await axios.get(`${listsUrl}${boardId}`, {
    withCredentials: true,
  });

  return res.data;
};
