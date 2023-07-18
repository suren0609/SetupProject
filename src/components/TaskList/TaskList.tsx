import React from "react";
import styles from "./TaskList.module.scss";
import { useSelector } from "react-redux";

const TaskList = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div className={styles.TaskList}>
      <div className={styles.listHeader}>
        <h5>To DO</h5>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className={styles.listBody}>
        <div className={styles.taskCard}>
          <div className={styles.cardTop}>
            <p>Create Task`s UI</p>
            <div className={styles.cardTopEdit}>
              <i className="fa-solid fa-pencil"></i>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomControls}>
              <i className="fa-solid fa-bars"></i>
              <div>
                <i className="fa-regular fa-comment"></i> 1
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.userAva}>
                {`${user.firstname[0]}${user.lastname[0]}`}
              </div>
            </div>
          </div>
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
