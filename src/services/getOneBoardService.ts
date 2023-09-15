import axios from "axios";
import { boardsUrl } from "utils/apiUrls";

export const getOneBoardService = async (id: string) => {
  try {
    const data = await axios.get(`${boardsUrl}${id}`, {
      withCredentials: true,
    });

    return data;
  } catch (err: any) {
    return err.message;
  }
};
