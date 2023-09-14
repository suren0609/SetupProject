import axios from "axios";
import { userUrl } from "utils/apiUrls";

export const getUserService = async () => {
  return await axios.get(`${userUrl}user`, {
    withCredentials: true,
  });
};
