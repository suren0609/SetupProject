import React from "react";

import styles from "./DeleteBoardPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBoardAction } from "store/actions";
import { setDeleteBoardPopupActive } from "store/slices/popupSlice";

const DeleteBoardPopup = () => {
  const { boardId } = useSelector(
    (state: any) => state.popup.closeBoardPopupPos,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteBoardHandletr = () => {
    dispatch(deleteBoardAction({ id: boardId, navigate }));
    dispatch(setDeleteBoardPopupActive(false));
  };

  const closePopup = () => {
    dispatch(setDeleteBoardPopupActive(false));
  };
  return (
    <div onClick={closePopup} className={styles.container}>
      <div className={styles.DeleteBoardPopup}>
        <p>Permanently delete board?</p>
        <div className={styles.btns}>
          <button
            onClick={deleteBoardHandletr}
            data-name="inputOrButton"
            className={styles.yes}
          >
            Yes
          </button>
          <button
            onClick={closePopup}
            data-name="inputOrButton"
            className={styles.no}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBoardPopup;
