import React, { FC, MouseEvent } from "react";

import { AddList } from "components/AddList";
import { TaskList } from "components/TaskList";
import styles from "./HomeDetails.module.scss";
import { useSelector } from "react-redux";
import { listState } from "store/selectors";
import { listsSelector } from "store/slices/listSlice";

const HomeDetails: FC = () => {
  const listsIds = useSelector(listsSelector.selectIds);
  const listsEntities = useSelector(listsSelector.selectEntities);
  const { lists } = useSelector(listState);

  return (
    <div className={styles.HomeDetails}>
      <div className={styles.scrollContainer}>
        {listsIds.map((id) => {
          const list = listsEntities[id];
          if (list !== undefined) {
            return <TaskList key={id} list={list} />;
          }
          return null;
        })}

        <AddList />
      </div>
    </div>
  );
};

export default HomeDetails;
