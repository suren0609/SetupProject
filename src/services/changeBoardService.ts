import axios from "axios";
import { toastParameters } from "helpers/toastAlertParams";
import { toast } from "react-toastify";
import { IBoardResponse } from "store/types";
import { boardsUrl } from "utils/apiUrls";

export const changeBoardService = async (editedBoard: IBoardResponse) => {
  const res = await axios.put(`${boardsUrl}${editedBoard.id}`, editedBoard, {
    withCredentials: true,
  });
  toast.success("Board edited successfuly!", toastParameters);
  return res.data;
};
