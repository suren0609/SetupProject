import axios from "axios";
import { ILogin } from "store/types";

export const loginUser = async (userData: ILogin) => {
  try {
    const response = await axios.post(
      "https://young-citadel-44598.herokuapp.com/login",
      userData,
    );
    return response;
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};
