import axios from "axios";
import { IListData } from "store/types";
import { listsUrl } from "utils/apiUrls";

export const updateListService = async (list: IListData) => {
  const res = await axios.put(`${listsUrl}${list.id}`, list, {
    withCredentials: true,
  });

  return res;
};
