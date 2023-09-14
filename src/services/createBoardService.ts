import axios from "axios";

import { IBoardData } from "store/types";
import { boardsUrl } from "utils/apiUrls";

export const createBoardService = async (boardData: IBoardData) => {
  const { data } = await axios.post(boardsUrl, boardData, {
    withCredentials: true,
  });

  return data;
};
