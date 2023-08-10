import { BoardForm } from "components/BoardForm";
import CreateBoard from "components/CreateBoard/CreateBoard";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessModifierActive,
  setBoardPopupRender,
  setCreateBoardActive,
} from "store/slices/popupSlice";
import { CREATE_BOARD } from "store/types";
import styles from "./CreateBoardPopupRender.module.scss";

const CreateBoardPopupRender = () => {
  const popupChenger = useSelector(
    (state: any) => state.popup.createBoardPopupRender,
  );

  const { top, left } = useSelector(
    (state: any) => state.popup.createBoardPopupPos,
  );

  const isBoardBackgroundActive = useSelector(
    (state: any) => state.popup.isBoardBackgroundActive,
  );

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isBoardBackgroundActive === false) {
      divRef.current?.focus();
    }
  }, [isBoardBackgroundActive]);

  const dispatch = useDispatch();

  const closePopup = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    dispatch(setCreateBoardActive(false));
    dispatch(setAccessModifierActive(false));
    dispatch(setBoardPopupRender(CREATE_BOARD.CREATEBOARD));
  };
  return (
    <div
      onBlur={closePopup}
      tabIndex={0}
      ref={divRef}
      className={styles.CreateBoardPopupRender}
      style={{ top: top, left: left }}
    >
      {popupChenger === CREATE_BOARD.CREATEBOARD && <CreateBoard />}
      {popupChenger === CREATE_BOARD.BOARDFORM && <BoardForm />}
    </div>
  );
};

export default CreateBoardPopupRender;
