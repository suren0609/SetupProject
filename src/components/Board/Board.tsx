import { HomeBody } from "components/HomeBody";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const Board = () => {
  const isLoading = useSelector((state: any) => state.isLoading);

  return (
    <>
      {!isLoading ? (
        <ClipLoader color="#1c2422" loading={!isLoading} />
      ) : (
        <HomeBody />
      )}
    </>
  );
};

export default Board;
