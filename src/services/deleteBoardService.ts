import axios from "axios";

export const deleteBoardService = async (id: number) => {
  try {
    const res = await axios.delete(
      `https://young-citadel-44598.herokuapp.com/boards/${id}`,
      { withCredentials: true },
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
