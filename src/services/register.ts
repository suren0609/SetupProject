import axios from "axios";
import { IRegister } from "store/types";
import { userUrl } from "utils/apiUrls";

export const registerUser = async (userData: IRegister) => {
  try {
    const data = await axios.post(`${userUrl}register`, userData);

    return data;
  } catch (err: any) {
    const { data } = err.response;

    return data;
  }
};
