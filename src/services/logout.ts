import axios from "axios";
import Cookies from "js-cookie";

export const logoutUser = async () => {
  try {
    await axios.post("https://young-citadel-44598.herokuapp.com/logout");
    Cookies.remove("token");
  } catch (err) {
    
  }
};
