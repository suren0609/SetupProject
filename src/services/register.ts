import axios from "axios";
import { IRegister } from "store/types";

export const registerUser = async (userData: IRegister) => {
  try {
    const data = await axios.post(
      " https://young-citadel-44598.herokuapp.com/register",
      userData,
    );
    console.log(data);
    return data;
  } catch (err: any) {
    const { data } = err.response;
    console.log(err.response);

    return data;
  }
};
