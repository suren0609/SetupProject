import { FC, MouseEvent, useEffect } from "react";
import { LittleHeader } from "components/LittleHeader";
import { HomeDetails } from "../HomeDetails";
import styles from "./HomeBody.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBg, setCurrentBoard } from "store/slices/boardSlice";
import { IBoardResponse } from "store/types";
import { getOneBoardAction } from "store/actions";

const HomeBody: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) dispatch(getOneBoardAction({ id }));
  }, [id]);
  const currentBoard = useSelector((state: any) => state.board.currentBoard);

  return (
    <div
      className={styles.homeBodyWhenSideActive}
      style={{ backgroundImage: `url(${currentBoard.background})` }}
    >
      <LittleHeader />
      <HomeDetails />
    </div>
  );
};

export default HomeBody;
