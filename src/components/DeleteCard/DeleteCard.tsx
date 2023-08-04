import React, { FC } from "react";

import styles from "./DeleteCard.module.scss";

interface IProp {
  closeDeleteCard: (e: any) => void;
}

const DeleteCard: FC<IProp> = ({ closeDeleteCard }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.DeleteCard}>
      <div className={styles.title}>
        <h4>Delete card?</h4>
        <i onClick={closeDeleteCard} className="fa-solid fa-xmark"></i>
      </div>
      <p>
        All actions will be removed from the activity feed and you won’t be able
        to re-open the card. There is no undo.
      </p>
      <button data-name="inputOrButton">Delete</button>
    </div>
  );
};

export default DeleteCard;
