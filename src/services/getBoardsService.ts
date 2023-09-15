import axios from "axios";
import { boardsUrl } from "utils/apiUrls";

export const getBoardsService = async () => {
  try {
    return await axios(boardsUrl, {
      withCredentials: true,
    });
  } catch (err: any) {
    return err.message;
  }
};
