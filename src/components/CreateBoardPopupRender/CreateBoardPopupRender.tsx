import { BoardForm } from "components/BoardForm";
import CreateBoard from "components/CreateBoard/CreateBoard";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupState } from "store/selectors";
import {
  setAccessModifierActive,
  setBoardPopupRender,
  setCreateBoardActive,
  setEditActive,
} from "store/slices/popupSlice";
import { CREATE_BOARD } from "store/types";
import styles from "./CreateBoardPopupRender.module.scss";
import { setEditableBoard } from "store/slices/boardSlice";

const CreateBoardPopupRender = () => {
  const { createBoardPopupRender } = useSelector(popupState);

  const { top, left } = useSelector(
    (state: any) => state.popup.createBoardPopupPos,
  );
  const { isCreateBoardActive } = useSelector(popupState);

  const { isBoardBackgroundActive } = useSelector(popupState);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      isCreateBoardActive ||
      createBoardPopupRender === CREATE_BOARD.CREATEBOARD
    ) {
      divRef.current?.focus();
    }
  }, [isCreateBoardActive, createBoardPopupRender]);

  useEffect(() => {
    if (isBoardBackgroundActive === false) {
      divRef.current?.focus();
    }
  }, [isBoardBackgroundActive]);

  const dispatch = useDispatch();

  const closePopup = (e: any) => {
    if (
      e.relatedTarget?.dataset?.name === "inputOrButton" ||
      e.relatedTarget?.dataset?.name === "inputOrButton1"
    ) {
      return;
    }
    dispatch(setCreateBoardActive(false));
    dispatch(setAccessModifierActive(false));
    dispatch(setEditActive(false));
    dispatch(setBoardPopupRender(CREATE_BOARD.CREATEBOARD));
  };

  const dynamicPos = (myTop: number) => {
    if (window.innerHeight - myTop - 100 < 600) {
      myTop -= myTop;
    }
    return myTop;
  };

  return isCreateBoardActive ? (
    <div
      onBlur={closePopup}
      tabIndex={0}
      ref={divRef}
      className={styles.CreateBoardPopupRender}
      style={{ top: dynamicPos(top), left: left }}
      data-name="inputOrButton"
    >
      {createBoardPopupRender === CREATE_BOARD.CREATEBOARD && <CreateBoard />}
      {createBoardPopupRender === CREATE_BOARD.BOARDFORM && <BoardForm />}
    </div>
  ) : null;
};

export default CreateBoardPopupRender;
