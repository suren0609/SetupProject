import React, { FC, MouseEvent } from "react";

import { AddList } from "components/AddList";
import { TaskList } from "components/TaskList";
import styles from "./HomeDetails.module.scss";

const HomeDetails: FC = () => {
  return (
    <div className={styles.HomeDetails}>
      <div className={styles.scrollContainer}>
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <AddList />
      </div>
    </div>
  );
};

export default HomeDetails;
