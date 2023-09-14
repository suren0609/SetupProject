import axios from "axios";

export const deleteListService = async (listId: string) => {
  const res = await axios.delete(
    `https://young-citadel-44598.herokuapp.com/categories/${listId}`,
    { withCredentials: true },
  );
  return res;
};
