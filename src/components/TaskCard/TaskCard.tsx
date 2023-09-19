import { FC, MouseEvent, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { isTaskTemplateSelector, userSelector } from "store/selectors";
import {
  setTaskCardActive,
  setTaskCardPosition,
  setTaskDetailsActive,
} from "store/slices/taskSlice";
import {
  setIsUserProfileActive,
  setProfilePosition,
} from "store/slices/userPopupSlice";
import styles from "./TaskCard.module.scss";
import { ITaskData } from "store/types";

interface ICardProps {
  changeUserProfileActive: () => void;
  task: ITaskData;
}

const TaskCard: FC<ICardProps> = ({ changeUserProfileActive, task }) => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  const isTemplate = useSelector(isTaskTemplateSelector);

  const handleTaskDetails = () => {
    dispatch(setTaskDetailsActive(true));
  };

  const closeUserProfilePopup = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "userProfile") {
      return;
    }
    dispatch(setIsUserProfileActive(false));
  };

  const divRef = useRef<HTMLDivElement>(null);
  const handleCardActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const { top, left } = divRef.current!.getBoundingClientRect();
    dispatch(setTaskCardActive(true));
    dispatch(setTaskCardPosition({ top, left }));
  };

  const handleUserProfileActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const { top, left } = divRef.current!.getBoundingClientRect();
    dispatch(setProfilePosition({ top: top + 65, left: left + 220 }));
    changeUserProfileActive();
  };

  return (
    <div onClick={handleTaskDetails} className={styles.taskCard} ref={divRef}>
      <div className={styles.cardTop}>
        <p>{task.name}</p>
        <div onClick={handleCardActive} className={styles.cardTopEdit}>
          <i className="fa-solid fa-pencil"></i>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomControls}>
          {isTemplate ? (
            <>
              <div className={styles.thisCardIs}>
                <i className="fa-regular fa-images"></i> This card is template.
              </div>
              <i className="fa-solid fa-bars"></i>
            </>
          ) : (
            <>
              <i className="fa-solid fa-bars"></i>
              <div>
                <i className="fa-regular fa-comment"></i> 1
              </div>
            </>
          )}
        </div>
        <div className={styles.profile}>
          <div
            onClick={handleUserProfileActive}
            onBlur={closeUserProfilePopup}
            className={styles.userAva}
            tabIndex={0}
          >
            {`${user.firstname[0]}${user.lastname[0]}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
