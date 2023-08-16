import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.scss";
import { NavLink as Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBoardResponse } from "store/types";
import { getBoardsAction } from "store/actions";
import {
  setCloseBoardPopupActive,
  setCloseBoardPopupPos,
} from "store/slices/popupSlice";
import { setEditableBoard } from "store/slices/boardSlice";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const sidebarActiveHandler = () => {
    setIsActive((prev) => !prev);
  };
  const { boardData } = useSelector((state: any) => state.board);
  const dispatch = useDispatch();

  const isCloseBoardPopupActive = useSelector(
    (state: any) => state.popup.isCloseBoardPopupActive,
  );

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBoardsAction());
  }, []);

  const closeBoardPopupHandler = (e: any, board: IBoardResponse) => {
    e.preventDefault();
    e.stopPropagation();

    const { top, left } = e.target!.getBoundingClientRect();

    dispatch(
      setCloseBoardPopupPos({
        top: top,
        left: left,
        boardName: e.currentTarget?.dataset.name,
        boardId: board.id,
      }),
    );
    dispatch(setEditableBoard(board));
    dispatch(setCloseBoardPopupActive(!isCloseBoardPopupActive));
  };

  const routeOnClick = (path: number) => {
    navigate(`/${path}`);
  };

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
        {boardData.map((board: IBoardResponse) => (
          <div
            onClick={() => routeOnClick(board.id)}
            className={
              board.id === Number(id)
                ? `${styles.boardName} ${styles.currentBoardName}`
                : styles.boardName
            }
            key={board.id}
          >
            <div className={styles.boardNameLeft}>
              <div
                className={styles.boardNameImg}
                style={{ backgroundImage: `url(${board.background})` }}
              ></div>
              <div>{board.name}</div>
            </div>
            <div className={styles.menuAndStar}>
              <i
                onClick={(e) => closeBoardPopupHandler(e, board)}
                className="fa-solid fa-ellipsis"
                tabIndex={0}
                data-name={board.name}
              ></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
