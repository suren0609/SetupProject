import axios from "axios";
import Cookies from "js-cookie";
import { userUrl } from "utils/apiUrls";

export const logoutUser = async () => {
  try {
    await axios.post(`${userUrl}logout`);
    Cookies.remove("token");
  } catch (err) {
    return err;
  }
};
