import axios from "axios";
import { toastParameters } from "helpers/toastAlertParams";
import { toast } from "react-toastify";
import { IBoardData } from "store/types";

export const createBoardService = async (boardData: IBoardData) => {
  try {
    const { data } = await axios.post(
      `https://young-citadel-44598.herokuapp.com/boards`,
      boardData,
      { withCredentials: true },
    );
    toast.success("New board created successfuly!", toastParameters);
    return data;
  } catch (err: any) {
    const { data } = await err.response;
    toast.success("Creating failed!", toastParameters);
    return data;
  }
};
