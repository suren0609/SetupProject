import axios from "axios";
import { toastParameters } from "helpers/toastAlertParams";
import { toast } from "react-toastify";
import { IBoardResponse } from "store/types";

export const changeBoardService = async (editedBoard: IBoardResponse) => {
  try {
    const res = await axios.put(
      ` https://young-citadel-44598.herokuapp.com/boards/${editedBoard.id}`,
      editedBoard,
      { withCredentials: true },
    );
    toast.success("Board edited successfuly!", toastParameters);
    return res.data;
  } catch (err) {
    toast.success("Board editing failed!", toastParameters);
    return err;
  }
};
