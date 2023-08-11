import React, { useState, MouseEvent, useRef, FC, useEffect } from "react";

import styles from "./BoardForm.module.scss";
import { CreateBoard } from "components/CreateBoard";
import { bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9 } from "imagesUrls";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessModifierActive,
  setAccessModifierPos,
  setBoardBackgroundActive,
  setBoardBackgroundPos,
  setBoardPopupRender,
  setCreateBoardActive,
} from "store/slices/popupSlice";
import { CREATE_BOARD } from "store/types";
import { setCurrentBg } from "store/slices/boardSlice";
import { createBoardService } from "services/createBoardService";
import { useNavigate } from "react-router-dom";
import { setBoardAction } from "store/actions";

const BoardForm = () => {
  const currentBg = useSelector((state: any) => state.board.currentBg);

  const [formData, setFormData] = useState({
    name: "",
    background: currentBg,
  });

  const isAccessModifierActive = useSelector(
    (state: any) => state.popup.isAccessModifierPopupActive,
  );

  const selectedValue = useSelector(
    (state: any) => state.board.createBoardSelect,
  );

  const isBoardBackgroundActive = useSelector(
    (state: any) => state.popup.isBoardBackgroundActive,
  );

  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setBoardPopupRender(CREATE_BOARD.CREATEBOARD));
  };

  const closeBoardForm = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    dispatch(setCreateBoardActive(false));
    dispatch(setBoardPopupRender(CREATE_BOARD.CREATEBOARD));
  };

  const changeBackground = (bg: string) => {
    dispatch(setCurrentBg(bg));
    setFormData({ ...formData, background: bg });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const value = watch("boardTitle");

  const selectRef = useRef<HTMLDivElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  const handleAccessModifierActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const { top, left } = selectRef.current!.getBoundingClientRect();
    dispatch(setAccessModifierPos({ top: top + 50, left: left }));
    dispatch(setAccessModifierActive(!isAccessModifierActive));
  };

  const btnRef = useRef<HTMLButtonElement>(null);

  const BoardBackgroundPopupHandler = () => {
    const { top, left } = btnRef.current!.getBoundingClientRect();
    dispatch(setBoardBackgroundPos({ top: top, left: left }));
    dispatch(setBoardBackgroundActive(!isBoardBackgroundActive));
  };

  const navigate = useNavigate();
  const submitForm = (e: any) => {
    e.preventDefault();
    dispatch(setBoardAction({ board_data: formData, navigate }));
    dispatch(setCreateBoardActive(false));
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      data-name="inputOrButton"
      className={styles.BoardForm}
      ref={divRef}
      tabIndex={0}
    >
      <div className={styles.title}>
        <i onClick={handleBack} className="fa-solid fa-chevron-left"></i>
        <h4>Create board</h4>
        <i onClick={closeBoardForm} className="fa-solid fa-xmark"></i>
      </div>
      <div
        className={styles.bigBg}
        style={{ backgroundImage: `url(${currentBg})` }}
      >
        <img src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" />
      </div>
      <div className={styles.backgrounds}>
        <h5>Background</h5>
        <div className={styles.imgs}>
          <div onClick={() => changeBackground(bg6)} className={`bg6`}>
            {currentBg === bg6 && <i className="fa-solid fa-check"></i>}
          </div>
          <div onClick={() => changeBackground(bg7)} className={`bg7`}>
            {currentBg === bg7 && <i className="fa-solid fa-check"></i>}
          </div>
          <div onClick={() => changeBackground(bg8)} className={`bg8`}>
            {currentBg === bg8 && <i className="fa-solid fa-check"></i>}
          </div>
          <div onClick={() => changeBackground(bg9)} className={`bg9`}>
            {currentBg === bg9 && <i className="fa-solid fa-check"></i>}
          </div>
        </div>
        <div className={styles.colors}>
          <button
            onClick={() => changeBackground(bg1)}
            data-name="inputOrButton"
            className={`bg1`}
          >
            {currentBg === bg1 && <i className="fa-solid fa-check"></i>}
          </button>
          <button
            onClick={() => changeBackground(bg2)}
            data-name="inputOrButton"
            className={`bg2`}
          >
            {currentBg === bg2 && <i className="fa-solid fa-check"></i>}
          </button>
          <button
            onClick={() => changeBackground(bg3)}
            data-name="inputOrButton"
            className={`bg3`}
          >
            {currentBg === bg3 && <i className="fa-solid fa-check"></i>}
          </button>
          <button
            onClick={() => changeBackground(bg4)}
            data-name="inputOrButton"
            className={`bg4`}
          >
            {currentBg === bg4 && <i className="fa-solid fa-check"></i>}
          </button>
          <button
            onClick={() => changeBackground(bg5)}
            data-name="inputOrButton"
            className={`bg5`}
          >
            {currentBg === bg5 && <i className="fa-solid fa-check"></i>}
          </button>
          <button
            onClick={BoardBackgroundPopupHandler}
            ref={btnRef}
            className={styles.more}
            data-name="inputOrButton"
          >
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
      <form onSubmit={submitForm}>
        <label htmlFor="boardTitle">Board title</label>
        <input
          {...register("boardTitle", { required: true, maxLength: 30 })}
          type="text"
          name="boardTitle"
          data-name="inputOrButton"
          className={`${!value && styles.notValid}`}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {!value && (
          <p>
            <i className="fa-solid fa-hand"></i> Board title is required
          </p>
        )}

        <div
          onClick={handleAccessModifierActive}
          ref={selectRef}
          className={styles.select}
          data-name="inputOrButton"
          tabIndex={0}
        >
          <span data-name="inputOrButton">{selectedValue}</span>
          <i data-name="inputOrButton" className="fa-solid fa-chevron-down"></i>
        </div>
        <button
          disabled={!value}
          type="submit"
          data-name="inputOrButton"
          className={styles.createBtn}
        >
          Create
        </button>
      </form>

      <button className={styles.startBtn} data-name="inputOrButton">
        Start with a template
      </button>
      <div className={styles.footerText}>
        By using images from Unsplash, you agree to their{" "}
        <a href="" data-name="inputOrButton">
          license
        </a>{" "}
        and{" "}
        <a href="" data-name="inputOrButton">
          Terms of Service
        </a>
      </div>
    </div>
  );
};

export default BoardForm;
