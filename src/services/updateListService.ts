import axios from "axios";
import { IListData } from "store/types";

export const updateListService = async (list: IListData) => {
  const res = await axios.put(
    `https://young-citadel-44598.herokuapp.com/categories/${list.id}`,
    list,
    { withCredentials: true },
  );

  return res;
};
