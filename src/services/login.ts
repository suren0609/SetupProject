import axios from "axios";
import { ILogin } from "store/types";
import { userUrl } from "utils/apiUrls";

export const loginUser = async (userData: ILogin) => {
  try {
    const response = await axios.post(`${userUrl}login`, userData, {
      withCredentials: true,
    });
    return response;
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};
