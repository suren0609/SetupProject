import React, { useState, MouseEvent } from "react";
import styles from "./TaskList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTaskDetailsActive } from "store/slices";
import { TaskCard } from "components/TaskCard";

const TaskList = () => {
  const user = useSelector((state: any) => state.user.user);

  const [isTemplateActive, setTemplateActive] = useState(false);

  const showTemplate = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setTemplateActive((prev) => !prev);
  };

  const hideTemplate = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "editButton") {
      return;
    }
    setTemplateActive(false);
  };

  return (
    <div className={styles.TaskList}>
      <div className={styles.listHeader}>
        <h5>To DO</h5>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className={styles.listBody}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <div className={styles.addCard}>
        <div>+ Add a card</div>
        <div
          onBlur={hideTemplate}
          tabIndex={0}
          className={styles.taskListTamplates}
        >
          <i
            onClick={(e) => showTemplate(e)}
            className="fa-solid fa-newspaper"
          ></i>
          {isTemplateActive && (
            <div className={styles.cardTemplates}>
              <div className={styles.title}>
                <h4>Card templates</h4>
              </div>
              <div className={styles.templatesBody}></div>
              <div className={styles.createTemplate}>
                + Create a new template
              </div>
              <button data-name="editButton">Edit templates</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
