import Loading from "components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { deleteListAction } from "store/actions";
import { listState, popupState } from "store/selectors";
import { setDeleteListLoading } from "store/slices/listSlice";
import { setDeleteListPopupActive } from "store/slices/popupSlice";
import styles from "./DeleteListPopup.module.scss";

const DeleteListPopup = () => {
  const { currentList, deleteListLoading } = useSelector(listState);
  const { isDeleteListPopupActive } = useSelector(popupState);
  const dispatch = useDispatch();

  const deleteListHandletr = (e: any) => {
    e.stopPropagation();
    dispatch(setDeleteListLoading(true));
    dispatch(deleteListAction(currentList));
  };

  const closePopup = () => {
    dispatch(setDeleteListPopupActive(false));
  };

  return isDeleteListPopupActive ? (
    <div onClick={closePopup} className={styles.container}>
      {deleteListLoading ? (
        <Loading />
      ) : (
        <div className={styles.DeleteListPopup}>
          <p>Permanently delete List?</p>
          <div className={styles.btns}>
            <button
              onClick={deleteListHandletr}
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

export default DeleteListPopup;
