import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { getBoardsAction } from "store/actions";
import { setEditableBoard } from "store/slices/boardSlice";
import {
  setCloseBoardPopupActive,
  setCloseBoardPopupPos,
} from "store/slices/popupSlice";
import { IBoardResponse } from "store/types";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const sidebarActiveHandler = () => {
    setIsActive((prev) => !prev);
  };
  const { boardData, editableBoard } = useSelector((state: any) => state.board);
  const dispatch = useDispatch();

  const isCloseBoardPopupActive = useSelector(
    (state: any) => state.popup.isCloseBoardPopupActive,
  );

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
          <Link
            to={`/board/${board.id}`}
            className={({ isActive }) =>
              isActive && editableBoard.id === board.id
                ? `${styles.boardName} ${styles.active}  ${styles.editable}`
                : isActive
                ? `${styles.boardName} ${styles.active}`
                : editableBoard.id === board.id
                ? `${styles.boardName} ${styles.editable}`
                : `${styles.boardName}`
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
