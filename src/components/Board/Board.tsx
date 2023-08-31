import { HomeBody } from "components/HomeBody";
import Loading from "components/Loading/Loading";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const Board = () => {
  const isLoading = useSelector((state: any) => state.isLoading);

  return <>{!isLoading ? <Loading /> : <HomeBody />}</>;
};

export default Board;
