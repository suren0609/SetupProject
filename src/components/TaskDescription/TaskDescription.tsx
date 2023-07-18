import React from "react";

import styles from "./TaskDescription.module.scss";

const TaskDescription = () => {
  return (
    <div className={styles.TaskDescription}>
      <div className={styles.container}>
        <div className={styles.winHeader}>
          <div className={styles.titleAndPlace}>
            <i className="fa-regular fa-hard-drive"></i>
            <div className={styles.title}>
              <h4>Create Tasks`s UI</h4>
              <p>in list in progress</p>
            </div>
          </div>
          <div className={styles.close}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className={styles.winBody}>
          <div className={styles.mainSection}></div>
          <div className={styles.descriptionSidebar}></div>
        </div>
      </div>
    </div>
  );
};

export default TaskDescription;
