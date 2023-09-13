import React, { FC, MouseEvent } from "react";

import { AddList } from "components/AddList";
import { TaskList } from "components/TaskList";
import styles from "./HomeDetails.module.scss";
import { useSelector } from "react-redux";
import { listState } from "store/selectors";

const HomeDetails: FC = () => {
  const {
    lists: { categories },
  } = useSelector(listState);

  return (
    <div className={styles.HomeDetails}>
      <div className={styles.scrollContainer}>
        {categories.map((list) => (
          <TaskList key={list?.id} list={list} />
        ))}

        <AddList />
      </div>
    </div>
  );
};

export default HomeDetails;
