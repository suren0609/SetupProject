import React, {
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EditCard.module.scss";
import { Labels } from "components/Labels";
import { Members } from "components/Members";
import { Cover } from "components/Cover";
import { Move } from "components/Move";
import { Copy } from "components/Copy";
import { Dates } from "components/Dates";
import { ref } from "yup";
import { taskCardPosSelector, userSelector } from "store/selectors";
import {
  setTaskCardActive,
  setTaskDetailsActive,
} from "store/slices/taskSlice";

const EditCard = () => {
  const [isLabelActive, setLabelActive] = useState(false);
  const [isMembersActive, setMembersActive] = useState(false);
  const [isCoverActive, setCoverActive] = useState(false);
  const [isMoveActive, setMoveActive] = useState(false);
  const [isCopyActive, setCopyActive] = useState(false);
  const [isDatesActive, setDatesActive] = useState(false);

  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const { top, left } = useSelector(taskCardPosSelector);

  const popupRef = useRef<HTMLLIElement>(null);
  const labelsRef = useRef<HTMLLIElement>(null);
  const membersRef = useRef<HTMLLIElement>(null);
  const coverRef = useRef<HTMLLIElement>(null);
  const moveRef = useRef<HTMLLIElement>(null);
  const copyRef = useRef<HTMLLIElement>(null);

  const handleClick = (cb: React.Dispatch<React.SetStateAction<boolean>>) => {
    cb((prev: boolean) => !prev);
  };

  const closePopup = (
    cb: React.Dispatch<React.SetStateAction<boolean>>,
    e: any,
  ) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    cb(false);
  };

  const hidePopup = () => {
    dispatch(setTaskCardActive(false));
  };

  const handleTaskDetails = () => {
    dispatch(setTaskDetailsActive(true));
    dispatch(setTaskCardActive(false));
  };

  return (
    <div onClick={hidePopup} className={styles.container}>
      <div
        style={{ top: top, left: left }}
        className={styles.EditCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cardActive}>
          <textarea name="card-title" id=""></textarea>
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
          <div className={styles.transitionPopup}>
            <ul>
              <li onClick={handleTaskDetails}>
                <i className="fa-solid fa-credit-card"></i> Open card
              </li>
              <li
                onClick={() => handleClick(setLabelActive)}
                onBlur={(e) => closePopup(setLabelActive, e)}
                tabIndex={0}
                ref={labelsRef}
              >
                <i className="fa-solid fa-tag"></i> Edit lables
                {isLabelActive && <Labels popupRef={labelsRef} />}
              </li>
              <li
                onClick={() => handleClick(setMembersActive)}
                onBlur={(e) => closePopup(setMembersActive, e)}
                tabIndex={0}
                ref={membersRef}
              >
                <i className="fa-regular fa-user"></i> Change members
                {isMembersActive && <Members popupRef={membersRef} />}
              </li>
              <li
                onClick={() => handleClick(setCoverActive)}
                onBlur={(e) => closePopup(setCoverActive, e)}
                tabIndex={0}
                ref={coverRef}
              >
                <i className="fa-solid fa-credit-card"></i> Change cover
                {isCoverActive && <Cover popupRef={coverRef} />}
              </li>
              <li
                onClick={() => handleClick(setMoveActive)}
                onBlur={(e) => closePopup(setMoveActive, e)}
                tabIndex={0}
                ref={moveRef}
              >
                <i className="fa-solid fa-arrow-right"></i> Move
                {isMoveActive && <Move popupRef={moveRef} />}
              </li>
              <li
                onClick={() => handleClick(setCopyActive)}
                onBlur={(e) => closePopup(setCopyActive, e)}
                tabIndex={0}
                ref={copyRef}
              >
                <i className="fa-solid fa-credit-card"></i> Copy
                {isCopyActive && <Copy popupRef={copyRef} />}
              </li>
              <li
                onClick={() => handleClick(setDatesActive)}
                onBlur={(e) => closePopup(setDatesActive, e)}
                tabIndex={0}
                ref={popupRef}
              >
                <i className="fa-regular fa-clock"></i> Edit dates
                {isDatesActive && <Dates popupRef={popupRef} />}
              </li>
              <li>
                <i className="fa-solid fa-box-archive"></i> Archive
              </li>
            </ul>
          </div>
        </div>
        <button className={styles.save}>Save</button>
      </div>
    </div>
  );
};

export default EditCard;
