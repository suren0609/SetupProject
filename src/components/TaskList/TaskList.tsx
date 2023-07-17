import React from "react";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  return (
    <div className={styles.TaskList}>
      <div className={styles.listHeader}>
        <h5>To DO</h5>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className={styles.listBody}></div>
    </div>
  );
};

export default TaskList;
