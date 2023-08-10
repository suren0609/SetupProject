import axios from "axios";
import { IBoardData } from "store/types";

export const createBoardService = async (boardData: IBoardData) => {
  try {
    const { data } = await axios.post(
      `https://young-citadel-44598.herokuapp.com/boards`,
      boardData,
      { withCredentials: true },
    );

    return data;
  } catch (err: any) {
    const { data } = await err.response;

    return data;
  }
};
