import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link, useLocation, useNavigate } from "react-router-dom";
import { getBoardsAction } from "store/actions";
import { setBoardsLoading, setEditableBoard } from "store/slices/boardSlice";
import {
  setCloseBoardPopupActive,
  setCloseBoardPopupPos,
  setCreateBoardPopupPos,
} from "store/slices/popupSlice";
import { IBoardResponse } from "store/types";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);
  const { pathname } = useLocation();

  const sidebarActiveHandler = () => {
    setIsActive((prev) => !prev);
  };
  const { boardData, editableBoard } = useSelector((state: any) => state.board);
  const dispatch = useDispatch();

  const isCloseBoardPopupActive = useSelector(
    (state: any) => state.popup.isCloseBoardPopupActive,
  );

  useEffect(() => {
    dispatch(getBoardsAction());
  }, []);

  const closeBoardPopupHandler = (e: any, board: IBoardResponse) => {
    e.preventDefault();
    e.stopPropagation();

    const { top, left } = e.target!.getBoundingClientRect();

    if (window.innerHeight <= 650) {
      dispatch(setCreateBoardPopupPos({ top: 0, left: left + 50 }));
    } else if (top + 650 > window.innerHeight) {
      dispatch(
        setCreateBoardPopupPos({
          top: top - (top + 650 - window.innerHeight),
          left: left + 50,
        }),
      );
    } else {
      dispatch(setCreateBoardPopupPos({ top: top - 50, left: left + 50 }));
    }

    dispatch(
      setCloseBoardPopupPos({
        top: top,
        left: left,
        boardName: board.name,
        boardId: board.id,
      }),
    );
    dispatch(setCloseBoardPopupActive(!isCloseBoardPopupActive));
    if (isCloseBoardPopupActive) {
      dispatch(setEditableBoard({}));
      return;
    }
    dispatch(setEditableBoard(board));
  };

  return (
    <div
      className={classNames({
        [styles.Sidebar]: isActive,
        [styles.sideBarNoActive]: !isActive,
      })}
    >
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
                data-name={board.id}
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
