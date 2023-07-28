import React, { useState, MouseEvent, useRef, useEffect } from "react";
import styles from "./TaskList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsUserProfileActive, setTaskDetailsActive } from "store/slices";
import { TaskCard } from "components/TaskCard";
import { UserProfile } from "components/UserProfile";
import { ListActions } from "components/ListActions";
import { getPosition } from "helpers/getPosition";

const TaskList = () => {
  const user = useSelector((state: any) => state.user.user);

  const [isTemplateActive, setTemplateActive] = useState(false);
  const [isAddCardActive, setAddCardActive] = useState(false);
  const [isListActionActive, setListActionActive] = useState(false);
  const [pos, setPos] = useState({ currentTop: 40, currentLeft: 0 });

  const isUserProfileActive = useSelector(
    (state: any) => state.userPopup.isUserProfileActive,
  );

  const dispatch = useDispatch();

  const handleListAction = () => {
    setListActionActive((prev) => !prev);
  };

  const closeListAction = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "listAction") {
      return;
    }
    setListActionActive(false);
  };

  const changeUserProfileActive = () => {
    dispatch(setIsUserProfileActive(true));
  };

  const templateRef = useRef<any>(null);
  const popupRef = useRef<any>(null);

  useEffect(() => {
    console.log("popupRef -> ", popupRef);
    if (popupRef?.current) {
      const { top, left } = templateRef.current?.getBoundingClientRect();
      const { height, width } = popupRef.current?.getBoundingClientRect();
      setPos((prevState) => {
        return {
          ...prevState,
          ...getPosition(width, height, top, left),
        };
      });
    }
  }, [isTemplateActive]);

  const showTemplate = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setTemplateActive((prev) => !prev);
  };

  const handleAddCardActive = () => {
    setAddCardActive(true);
  };

  const closeAddCard = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "addCardActive") {
      return;
    }
    setAddCardActive(false);
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
        <i
          onClick={handleListAction}
          onBlur={closeListAction}
          tabIndex={0}
          className="fa-solid fa-ellipsis"
        ></i>
        {isListActionActive && (
          <ListActions closeListAction={closeListAction} />
        )}
      </div>
      <div className={styles.listBody}>
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
      </div>
      <div className={styles.addCard}>
        {!isAddCardActive && (
          <div className={styles.addACard} onClick={handleAddCardActive}>
            + Add a card
          </div>
        )}

        {isAddCardActive ? (
          <div
            className={styles.AddCardActive}
            onClick={(e) => e.stopPropagation()}
            onBlur={closeAddCard}
            tabIndex={0}
            data-name="addCardActive"
          >
            <textarea
              name=""
              placeholder="Enter a title for this card..."
              autoFocus
            ></textarea>
            <div className={styles.buttonAndClose}>
              <button className={styles.add}>Add a card</button>
              <button onClick={closeAddCard} className={styles.close}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        ) : (
          <div
            onBlur={hideTemplate}
            tabIndex={0}
            className={styles.taskListTamplates}
            ref={templateRef}
          >
            <i
              onClick={(e) => showTemplate(e)}
              className="fa-solid fa-newspaper"
            ></i>
            {isTemplateActive && (
              <div
                ref={popupRef}
                style={{ top: pos.currentTop, left: pos.currentLeft }}
                className={styles.cardTemplates}
              >
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
        )}
      </div>
      {isUserProfileActive && <UserProfile />}
    </div>
  );
};

export default TaskList;
