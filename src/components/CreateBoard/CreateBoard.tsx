import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./CreateBoard.module.scss";
import { BoardForm } from "components/BoardForm";
import { useDispatch } from "react-redux";
import {
  setBoardPopupRender,
  setCreateBoardActive,
} from "store/slices/popupSlice";
import { CREATE_BOARD } from "store/types";

const CreateBoard = () => {
  const dispatch = useDispatch();

  const createBoardActive = () => {
    dispatch(setBoardPopupRender(CREATE_BOARD.BOARDFORM));
  };

  const closeCreateBoard = () => {
    dispatch(setCreateBoardActive(false));
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      // onBlur={closeCreateBoard}
      // tabIndex={0}
      className={styles.CreateBoard}
    >
      <div onClick={createBoardActive} className={styles.sections}>
        <h6>
          <i className="fa-brands fa-trello"></i> Create board
        </h6>
        <p>
          A board is made up of cards ordered on lists. Use it to manage
          projects, track information, or organize anything.
        </p>
      </div>
      <div className={styles.sections}>
        <h6>
          <i className="fa-brands fa-trello"></i> Start with a template
        </h6>
        <p>Get started faster with a board template.</p>
      </div>
      <div className={styles.sections}>
        <h6>
          <i className="fa-solid fa-user-group"></i> Create Workspace
        </h6>
        <p>
          A Workspace is a group of boards and people. Use it to organize your
          company, side hustle, family, or friends.
        </p>
      </div>
    </div>
  );
};

export default CreateBoard;
