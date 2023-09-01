import { FC, MouseEvent, useEffect } from "react";
import { LittleHeader } from "components/LittleHeader";
import { HomeDetails } from "../HomeDetails";
import styles from "./Board.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBg, setCurrentBoard } from "store/slices/boardSlice";
import { IBoardResponse } from "store/types";
import { getOneBoardAction } from "store/actions";
import { boardState } from "store/selectors";
import Loading from "components/Loading/Loading";

const Board: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getBoardsLoading } = useSelector((state: any) => state.board);
  const { boardData } = useSelector(boardState);

  useEffect(() => {
    if (id !== undefined && boardData.length)
      dispatch(getOneBoardAction({ id }));
  }, [id]);
  const currentBoard = useSelector((state: any) => state.board.currentBoard);

  return (
    <div className={styles.container}>
      {getBoardsLoading ? (
        <Loading />
      ) : (
        <div
          className={styles.homeBodyWhenSideActive}
          style={{ backgroundImage: `url(${currentBoard.background})` }}
        >
          <LittleHeader />
          <HomeDetails />
        </div>
      )}
    </div>
  );
};

export default Board;
