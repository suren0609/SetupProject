import axios from "axios";
import { IListData } from "store/types";
import { listsUrl } from "utils/apiUrls";

export const createListService = async (listData: IListData) => {
  const res = await axios.post(listsUrl, listData, {
    withCredentials: true,
  });

  return res;
};
