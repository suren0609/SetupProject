import { FC, MouseEvent, useEffect } from "react";
import { LittleHeader } from "components/LittleHeader";
import { HomeDetails } from "../HomeDetails";
import styles from "./Board.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBg, setCurrentBoard } from "store/slices/boardSlice";
import { IBoardResponse } from "store/types";
import { getOneBoardAction } from "store/actions";
import { boardState } from "store/selectors";
import Loading from "components/Loading/Loading";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

const Board: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getBoardLoading } = useSelector((state: any) => state.board);
  const { boardData } = useSelector(boardState);
  useEffect(() => {
    console.log("id -> ", id);
    // if (id) {
    dispatch(getOneBoardAction({ id: id as string }));
    // }
  }, []);

  const currentBoard = useSelector((state: any) => state.board.currentBoard);
  // console.log("currentBoard -> ", currentBoard);

  return (
    <div className={styles.container}>
      {getBoardLoading ? (
        <Loading />
      ) : currentBoard?.id ? (
        <div
          className={styles.homeBodyWhenSideActive}
          style={{ backgroundImage: `url(${currentBoard?.background})` }}
        >
          <LittleHeader />
          <HomeDetails />
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default Board;
