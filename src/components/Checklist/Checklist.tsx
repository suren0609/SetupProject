import React from "react";

import styles from "./Cecklist.module.scss";

const Checklist = () => {
  return (
    <div
      data-name="inputOrButton"
      onClick={(e) => e.stopPropagation()}
      className={styles.Checklist}
    >
      <div className={styles.title}>
        <h4>Add checklist</h4>
      </div>
      <div className={styles.titleInput}>
        <h5>Title</h5>
        <input data-name="inputOrButton" type="text" placeholder="Checklist" />
      </div>
      <button data-name="inputOrButton">Add</button>
    </div>
  );
};

export default Checklist;
