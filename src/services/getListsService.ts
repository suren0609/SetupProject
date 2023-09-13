import axios from "axios";

export const getListsService = async (boardId: string) => {
  const res = await axios.get(
    `https://young-citadel-44598.herokuapp.com/categories/${boardId}`,
    { withCredentials: true },
  );

  return res;
};
