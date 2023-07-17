import axios from "axios";

export const getUserService = async () => {
  return await axios.get("https://young-citadel-44598.herokuapp.com/user", {
    withCredentials: true,
  });
};
