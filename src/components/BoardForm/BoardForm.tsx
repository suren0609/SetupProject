import { MouseEvent, useEffect, useRef, useState } from "react";

import { bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9 } from "imagesUrls";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeBoardAction, setBoardAction } from "store/actions";
import { popupState } from "store/selectors";
import { setCurrentBg } from "store/slices/boardSlice";
import {
  setAccessModifierActive,
  setAccessModifierPos,
  setBoardBackgroundActive,
  setBoardBackgroundPos,
  setBoardPopupRender,
  setCreateBoardActive,
} from "store/slices/popupSlice";
import { CREATE_BOARD } from "store/types";
import styles from "./BoardForm.module.scss";
import Loading from "components/Loading/Loading";

interface BoardFormData {
  boardTitle: string;
}

const BoardForm = () => {
  const currentBg = useSelector((state: any) => state.board.currentBg);
  const dispatch = useDispatch();

  const selectRef = useRef<HTMLDivElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const btnRef = useRef<HTMLButtonElement>(null);

  const { isEditActive } = useSelector(popupState);

  const { editableBoard, createBoardLoading } = useSelector(
    (state: any) => state.board,
  );

  const [formData, setFormData] = useState({
    name: isEditActive ? editableBoard.name : "",
    background: isEditActive ? editableBoard.background : currentBg,
    id: editableBoard.id,
  });

  const { isAccessModifierPopupActive } = useSelector(popupState);

  const selectedValue = useSelector(
    (state: any) => state.board.createBoardSelect,
  );

  const { isBoardBackgroundActive } = useSelector(popupState);

  const handleBack = () => {
    dispatch(setBoardPopupRender(CREATE_BOARD.CREATEBOARD));
  };

  const closeBoardForm = (e: any) => {
    if (
      e.relatedTarget?.dataset?.name === "inputOrButton" ||
      e.relatedTarget?.dataset?.name === "inputOrButton1"
    ) {
      return;
    }
    dispatch(setCreateBoardActive(false));
    dispatch(setBoardPopupRender(CREATE_BOARD.CREATEBOARD));
  };

  const changeBackground = (bg: string) => {
    setFormData({ ...formData, background: bg });
    dispatch(setCurrentBg(bg));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (isEditActive) {
      setValue("boardTitle", editableBoard.name);
    }
  }, [setValue]);

  useEffect(() => {
    divRef.current?.focus();
    if (isEditActive) {
      dispatch(setCurrentBg(editableBoard.background));
    }
  }, []);

  useEffect(() => {
    divRef.current?.focus();
  }, [selectedValue]);

  const handleAccessModifierActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const { top, left } = selectRef.current!.getBoundingClientRect();
    dispatch(setAccessModifierPos({ top: top + 50, left: left }));
    dispatch(setAccessModifierActive(!isAccessModifierPopupActive));
  };

  const BoardBackgroundPopupHandler = () => {
    const { top, left } = btnRef.current!.getBoundingClientRect();
    if (left + 350 > window.innerWidth) {
      dispatch(setBoardBackgroundPos({ top: top, left: left - 350 }));
    } else {
      dispatch(setBoardBackgroundPos({ top: top, left: left }));
    }

    dispatch(setBoardBackgroundActive(!isBoardBackgroundActive));
  };

  const navigate = useNavigate();

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    dispatch(
      setBoardAction({
        board_data: {
          name: data.boardTitle,
          background: currentBg,
        },
        navigate,
      }),
    );
    dispatch(setBoardBackgroundActive(false));
  };

  const changeSubmitForm: SubmitHandler<FieldValues> = (data) => {
    dispatch(
      changeBoardAction({
        name: data.boardTitle,
        background: currentBg,
        id: editableBoard.id,
      }),
    );
    dispatch(setCreateBoardActive(false));
    dispatch(setBoardBackgroundActive(false));
  };

  const value = watch("boardTitle");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      data-name="inputOrButton1"
      className={styles.BoardForm}
      ref={divRef}
      tabIndex={0}
    >
      <div className={styles.title}>
        {!isEditActive && (
          <i onClick={handleBack} className="fa-solid fa-chevron-left"></i>
        )}
        {isEditActive ? (
          <h4 style={{ width: "100%", paddingLeft: "100px" }}>Edit board</h4>
        ) : (
          <h4>Create board</h4>
        )}

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
            data-name="inputOrButton1"
          >
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(isEditActive ? changeSubmitForm : submitForm)}
      >
        <label htmlFor="boardTitle">Board title</label>

        <input
          {...register("boardTitle", { required: true, maxLength: 30 })}
          type="text"
          data-name="inputOrButton"
          className={`${!value && styles.notValid}`}
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
          disabled={!value || createBoardLoading}
          type="submit"
          data-name="inputOrButton"
          className={styles.createBtn}
        >
          {isEditActive ? "Update" : "Create"}
          <div className={styles.loadingEl}>
            {createBoardLoading && <Loading />}
          </div>
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
