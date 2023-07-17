import React from "react";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  return (
    <div className={styles.TaskList}>
      <div className={styles.listHeader}>
        <h5>To DO</h5>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className={styles.listBody}>
        <div className={styles.taskCard}>
          <div className={styles.cardTop}>
            <p></p>
          </div>
          <div className={styles.cardBottom}></div>
        </div>
      </div>
      <div className={styles.addCard}>
        <div>+ Add a card</div>
        <div>
          <i className="fa-solid fa-newspaper"></i>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
