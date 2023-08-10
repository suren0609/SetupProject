import axios from "axios";

export const getBoardsService = async () => {
  try {
    return await axios("https://young-citadel-44598.herokuapp.com/boards", {
      withCredentials: true,
    });
  } catch (err: any) {
    return err.message;
  }
};
