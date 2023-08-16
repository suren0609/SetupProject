import React, { useEffect, useRef } from "react";

import styles from "./AccessModifierPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAccessModifierActive } from "store/slices/popupSlice";
import { setBoardSelect } from "store/slices/boardSlice";
import { boardState } from "store/selectors";

const AccessModifierPopup = () => {
  const { top, left } = useSelector(
    (state: any) => state.popup.accessModifierPos,
  );

  const { createBoardSelect } = useSelector(boardState);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  const dispatch = useDispatch();

  const closePopup = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    dispatch(setAccessModifierActive(false));
  };

  const changeSelectValue = (value: string) => {
    dispatch(setBoardSelect(value));
    dispatch(setAccessModifierActive(false));
  };

  return (
    <div
      className={styles.AccessModifierPopup}
      style={{ top: top, left: left }}
      onBlur={closePopup}
      tabIndex={0}
      data-name="inputOrButton"
      ref={divRef}
    >
      <div
        onClick={() => changeSelectValue("Private")}
        className={
          createBoardSelect === "Private"
            ? `${styles.sections} ${styles.selectActive}`
            : `${styles.sections}`
        }
      >
        <i className="fa-solid fa-lock"></i>
        <div className={styles.sectionInfo}>
          <h4>Private</h4>
          <p>Only board members can see and edit this board.</p>
        </div>
      </div>
      <div
        onClick={() => changeSelectValue("Workspace")}
        className={
          createBoardSelect === "Workspace"
            ? `${styles.sections} ${styles.selectActive}`
            : `${styles.sections}`
        }
      >
        <i className="fa-solid fa-user-group"></i>
        <div className={styles.sectionInfo}>
          <h4>Workspace</h4>
          <p>
            All members of the Suren Balayan`s workspace Workspace can see and
            edit this board.
          </p>
        </div>
      </div>
      <div
        onClick={() => changeSelectValue("Public")}
        className={
          createBoardSelect === "Public"
            ? `${styles.sections} ${styles.selectActive}`
            : `${styles.sections}`
        }
      >
        <i className="fa-solid fa-earth-africa"></i>
        <div className={styles.sectionInfo}>
          <h4>Public</h4>
          <p>
            Anyone on the internet can see this board. Only board members can
            edit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessModifierPopup;
