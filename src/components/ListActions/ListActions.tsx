import React from "react";

import styles from "./ListActions.module.scss";

interface IProp {
  closeListAction: (e: any) => void;
}

const ListActions = ({ closeListAction }: IProp) => {
  return (
    <div data-name="listAction" tabIndex={0} className={styles.ListActions}>
      <div className={styles.header}>
        <h4>List action</h4>
        <i onClick={closeListAction} className="fa-solid fa-xmark"></i>
      </div>
      <ul>
        <li>Add card...</li>
        <li>Copy list...</li>
        <li>Move list...</li>
        <li>watch</li>
        <li>Sort by...</li>
      </ul>
      <h5>Automation</h5>
      <ul>
        <li>Whrn a card is added to the list...</li>
        <li>Every day, sort list by...</li>
        <li>Every Monday, sort list by...</li>
        <li>Create a rule</li>
        <li>Move all cards in this list...</li>
        <li>Archive all cards in this list</li>
        <li>Archive this list</li>
      </ul>
    </div>
  );
};

export default ListActions;
