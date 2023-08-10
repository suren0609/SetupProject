import React, { FC, MouseEvent } from "react";
import styles from "./AddList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAddActive } from "store/slices/popupSlice";

const AddList: FC = () => {
  const dispatch = useDispatch();
  const isAddActive = useSelector((state: any) => state.popup.isAddActive);
  const changeAddIsActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(setAddActive(!isAddActive));
  };

  return !isAddActive ? (
    <div className={styles.AddList} onClick={(e) => changeAddIsActive(e)}>
      + Add another list
    </div>
  ) : (
    <div className={styles.AddListActive} onClick={(e) => e.stopPropagation()}>
      <input type="text" placeholder="Enter list title..." autoFocus />
      <div className={styles.buttonAndClose}>
        <button className={styles.add}>Add list</button>
        <button className={styles.close}>
          <i
            onClick={(e) => changeAddIsActive(e)}
            className="fa-solid fa-xmark"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default AddList;
