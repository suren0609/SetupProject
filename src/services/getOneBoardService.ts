import axios from "axios";

export const getOneBoardService = async (id: string) => {
  try {
    const data = await axios.get(
      `https://young-citadel-44598.herokuapp.com/boards/${id}`,
      { withCredentials: true },
    );

    return data;
  } catch (err: any) {
    return err.message;
  }
};
