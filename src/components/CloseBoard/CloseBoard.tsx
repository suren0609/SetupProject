import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setBoardPopupRender,
  setCloseBoardPopupActive,
  setCloseBoardPopupPos,
  setCreateBoardActive,
  setDeleteBoardPopupActive,
  setEditActive,
} from "store/slices/popupSlice";
import styles from "./CloseBoard.module.scss";

import { popupState } from "store/selectors";
import { setEditableBoard } from "store/slices/boardSlice";
import { CREATE_BOARD } from "store/types";

const CloseBoard = () => {
  const [isDeleteActive, setDeleteActive] = useState(false);
  const { top, left, boardName, boardId } = useSelector(
    (state: any) => state.popup.closeBoardPopupPos,
  );

  const { isCreateBoardActive } = useSelector(popupState);
  const { isCloseBoardPopupActive } = useSelector(popupState);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCloseBoardPopupActive) popupRef.current?.focus();
  }, [isCloseBoardPopupActive]);

  useEffect(() => {
    if (top + 200 > window.innerHeight && isCloseBoardPopupActive) {
      dispatch(
        setCloseBoardPopupPos({
          top: top - 160,
          left,
          boardName,
          boardId,
        }),
      );
    }
  }, [isCloseBoardPopupActive, top]);

  const dispatch = useDispatch();

  const onBlurCloseBoardPopup = (e: any) => {
    if (
      e.relatedTarget?.dataset?.name === "inputOrButton1" ||
      e.relatedTarget?.dataset?.name === boardId.toString()
    ) {
      return;
    }
    dispatch(setCloseBoardPopupActive(false));
    dispatch(setEditableBoard({}));
    setDeleteActive(false);
  };

  const handleDeleteActive = () => {
    setDeleteActive(true);
  };

  const handleDeleteUnactive = () => {
    setDeleteActive(false);
  };

  const closeBoardHandler = () => {
    dispatch(setDeleteBoardPopupActive(true));
    dispatch(setCloseBoardPopupActive(false));
  };

  const editRef = useRef<HTMLDivElement>(null);

  const editBoardPopupHandler = () => {
    dispatch(setBoardPopupRender(CREATE_BOARD.BOARDFORM));
    dispatch(setEditActive(true));
    dispatch(setCloseBoardPopupActive(false));
    dispatch(setCreateBoardActive(!isCreateBoardActive));
  };

  return isCloseBoardPopupActive ? (
    <div
      className={styles.CloseBoard}
      onBlur={onBlurCloseBoardPopup}
      tabIndex={0}
      style={{ top: top + 30, left: left }}
      ref={popupRef}
    >
      {!isDeleteActive ? (
        <>
          <div className={styles.header}>
            <h4>{boardName}</h4>
            <i
              onClick={onBlurCloseBoardPopup}
              className="fa-solid fa-xmark"
            ></i>
          </div>

          <div onClick={handleDeleteActive} className={styles.closeAndEdit}>
            <span>Close board</span>{" "}
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div
            onClick={editBoardPopupHandler}
            ref={editRef}
            className={styles.closeAndEdit}
            data-name="inputOrButton"
          >
            <span data-name="inputOrButton">Edit board</span>{" "}
            <i
              data-name="inputOrButton"
              className="fa-solid fa-chevron-right"
            ></i>
          </div>
        </>
      ) : (
        <>
          <div className={styles.header2}>
            <i
              onClick={handleDeleteUnactive}
              className="fa-solid fa-chevron-right fa-rotate-180"
            ></i>
            <h4>Close board?</h4>
            <i
              onClick={onBlurCloseBoardPopup}
              className="fa-solid fa-xmark"
            ></i>
          </div>
          <div className={styles.secondBody}>
            <p>
              You can find and reopen closed boards at the bottom of your boards
              page.
            </p>
            <button
              onClick={closeBoardHandler}
              data-name="inputOrButton1"
              className={styles.closeBtn}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  ) : null;
};

export default CloseBoard;
