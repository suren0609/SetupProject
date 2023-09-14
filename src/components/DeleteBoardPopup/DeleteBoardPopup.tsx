import Loading from "components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBoardAction } from "store/actions";
import { boardState, popupState } from "store/selectors";
import { setDeleteBoardPopupActive } from "store/slices/popupSlice";
import styles from "./DeleteBoardPopup.module.scss";

const DeleteBoardPopup = () => {
  const { boardId } = useSelector(
    (state: any) => state.popup.closeBoardPopupPos,
  );
  const { deleteBoardLoading } = useSelector(boardState);
  const { isDeleteBoardPopupActive } = useSelector(popupState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteBoardHandletr = (e: any) => {
    e.stopPropagation();
    dispatch(deleteBoardAction({ id: boardId, navigate }));
  };

  const closePopup = () => {
    dispatch(setDeleteBoardPopupActive(false));
  };
  return isDeleteBoardPopupActive ? (
    <div onClick={closePopup} className={styles.container}>
      {deleteBoardLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  ) : null;
};

export default DeleteBoardPopup;
