import React, { FC, useEffect, useRef } from "react";

import styles from "./ListActions.module.scss";
import { IListData } from "store/types";
import { useDispatch } from "react-redux";
import { setCurrentList } from "store/slices/listSlice";
import { setDeleteListPopupActive } from "store/slices/popupSlice";

interface IProp {
  closeListAction: (e: any) => void;
  list: IListData;
}

const ListActions: FC<IProp> = ({ closeListAction, list }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    divRef.current?.focus();
  }, []);

  const onDeleteList = (e: any) => {
    dispatch(setCurrentList(list));
    dispatch(setDeleteListPopupActive(true));
    closeListAction(e);
  };

  return (
    <div
      data-name="listAction"
      onBlur={closeListAction}
      tabIndex={0}
      ref={divRef}
      className={styles.ListActions}
    >
      <div className={styles.header}>
        <h4>List action</h4>
        <i onClick={closeListAction} className="fa-solid fa-xmark"></i>
      </div>
      <ul>
        <li>
          <a href="">Add card...</a>
        </li>
        <li>
          <a href="">Copy list...</a>
        </li>
        <li>
          <a href="">Move list...</a>
        </li>
        <li>
          <a href="">watch</a>
        </li>
        <li>
          <a href="">Sort by...</a>
        </li>
      </ul>
      <h5>Automation</h5>
      <ul>
        <li>
          <a href="">Whrn a card is added to the list...</a>
        </li>
        <li>
          <a href="">Every day, sort list by...</a>
        </li>
        <li>
          <a href="">Every Monday, sort list by...</a>
        </li>
        <li>
          <a href="">Create a rule</a>
        </li>
        <li>
          <a href="">Move all cards in this list...</a>
        </li>
        <li>
          <a href="">Archive all cards in this list</a>
        </li>
        <li data-name="listAction">
          <div onClick={onDeleteList} data-name="listAction">
            Delete this list
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListActions;
