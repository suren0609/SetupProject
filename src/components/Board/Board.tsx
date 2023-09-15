import { Layout } from "components/Layout";
import { LittleHeader } from "components/LittleHeader";
import Loading from "components/Loading/Loading";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListAction, getOneBoardAction } from "store/actions";
import { boardState } from "store/selectors";
import { HomeDetails } from "../HomeDetails";
import styles from "./Board.module.scss";
import axios from "axios";

const Board: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getBoardLoading } = useSelector((state: any) => state.board);
  const { boardData, currentBoard } = useSelector(boardState);

  useEffect(() => {
    dispatch(getOneBoardAction({ id: id as string }));
    dispatch(getListAction({ boardId: id as string }));
  }, [id]);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Board;
