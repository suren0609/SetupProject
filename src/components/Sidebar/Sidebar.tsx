import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { NavLink as Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBoardResponse } from "store/types";
import { getBoardsAction } from "store/actions";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const sidebarActiveHandler = () => {
    setIsActive((prev) => !prev);
  };
  const boards = useSelector((state: any) => state.board.boardData);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getBoardsAction());
  }, [boards]);

  // const handleClick = (boardId: number) => {
  //   boardData.find((board: any) => {
  //     board.id === boardId;
  //   })
  // };

  return (
    <div className={isActive ? styles.Sidebar : styles.sideBarNoActive}>
      <div className={styles.sidebarHeader}>
        <div className={styles.counts}>
          <div className={styles.count1}>4</div>
          <div className={styles.count2}>48</div>
        </div>
        <button className={styles.cntrlBtn} onClick={sidebarActiveHandler}>
          <i className="bx bx-chevron-left"></i>
        </button>
      </div>
      <div className={styles.sidebarBody}>
        <h4>Your boards</h4>
        {boards.map((board: IBoardResponse) => (
          <Link className={styles.boardName} to={`/${board.id}`} key={board.id}>
            <div
              className={styles.boardNameImg}
              style={{ backgroundImage: `url(${board.background})` }}
            ></div>
            <div>{board.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
