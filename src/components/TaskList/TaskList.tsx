import { CardTemplate } from "components/CardTemplate";
import { ListActions } from "components/ListActions";
import { TaskCard } from "components/TaskCard";
import { UserProfile } from "components/UserProfile";
import { getTemplatePos } from "helpers/getPosition";
import { getParameters } from "helpers/parametersForPosition";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileActiveSelector } from "store/selectors";
import { setIsUserProfileActive } from "store/slices/userPopupSlice";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const user = useSelector((state: any) => state.user.user);

  const [isTemplateActive, setTemplateActive] = useState(false);
  const [isAddCardActive, setAddCardActive] = useState(false);
  const [isListActionActive, setListActionActive] = useState(false);
  const [pos, setPos] = useState({ currentTop: 0, currentLeft: 0 });

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAddCardActive) {
      listRef.current!.scrollTo({
        top: listRef.current!.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isAddCardActive]);

  const isUserProfileActive = useSelector(userProfileActiveSelector);

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
    dispatch(setIsUserProfileActive(!isUserProfileActive));
  };

  const templateRef = useRef<any>(null);
  const popupRef = useRef<any>(null);

  useEffect(() => {
    if (popupRef?.current) {
      const { top, left, height, width } = getParameters(templateRef, popupRef);

      setPos(getTemplatePos(width, height, top, left));
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
      <div ref={listRef} className={styles.listBody}>
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />
        <TaskCard changeUserProfileActive={changeUserProfileActive} />

        {isAddCardActive && (
          <div
            className={styles.AddCardActive}
            onClick={(e) => e.stopPropagation()}
            onBlur={closeAddCard}
            tabIndex={0}
            data-name="addCardActive"
          >
            <textarea
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
        )}
      </div>
      {!isAddCardActive && (
        <div className={styles.addCard}>
          <div className={styles.addACardBtn} onClick={handleAddCardActive}>
            + Add a card
          </div>
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
          </div>
        </div>
      )}

      {isTemplateActive && <CardTemplate pos={pos} popupRef={popupRef} />}
      {isUserProfileActive && <UserProfile />}
    </div>
  );
};

export default TaskList;
