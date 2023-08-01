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
        <li>
          <a href="">Archive this list</a>
        </li>
      </ul>
    </div>
  );
};

export default ListActions;
