import axios from "axios";
import { IListData } from "store/types";

export const createListService = async (listData: IListData) => {
  const res = await axios.post(
    `https://young-citadel-44598.herokuapp.com/categories/`,
    listData,
    {
      withCredentials: true,
    },
  );

  return res;
};
