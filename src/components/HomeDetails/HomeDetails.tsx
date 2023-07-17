import React, { FC, MouseEvent } from "react";

import { AddList } from "components/AddList";
import { TaskList } from "components/TaskList";
import styles from "./HomeDetails.module.scss";

interface IHomeDetailsProps {
  isAddActive: boolean;
  changeAddIsActive: (e: MouseEvent<HTMLElement>) => void;
}

const HomeDetails: FC<IHomeDetailsProps> = ({
  isAddActive,
  changeAddIsActive,
}) => {
  return (
    <div className={styles.HomeDetails}>
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <AddList
        isAddActive={isAddActive}
        changeAddIsActive={changeAddIsActive}
      />
    </div>
  );
};

export default HomeDetails;
