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

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getBoardsAction());
  }, []);

  const boards = useSelector((state: any) => state.board.boardData);
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
        {boards.map((board: IBoardResponse) => (
          <div className={styles.boardName} key={board.id}>
            <Link to={`/${board.id}`}>{board.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
