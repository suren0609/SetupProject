import axios from "axios";

import { IBoardData } from "store/types";

export const createBoardService = async (boardData: IBoardData) => {
  const { data } = await axios.post(
    `https://young-citadel-44598.herokuapp.com/boards`,
    boardData,
    { withCredentials: true },
  );

  return data;
};
