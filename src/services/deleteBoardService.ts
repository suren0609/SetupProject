import axios from "axios";
import { boardsUrl } from "utils/apiUrls";

export const deleteBoardService = async (id: number) => {
  try {
    const res = await axios.delete(`${boardsUrl}${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
