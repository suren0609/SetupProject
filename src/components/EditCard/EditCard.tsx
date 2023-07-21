import React from "react";

import styles from "./EditCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTaskCardActive } from "store/slices";

const EditCard = () => {
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  const { top, left } = useSelector(
    (state: any) => state.tasks.taskCardPosition,
  );

  const hidePopup = () => {
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
              <li>
                <i className="fa-solid fa-credit-card"></i> Open card
              </li>
              <li>
                <i className="fa-solid fa-tag"></i> Edit lables
              </li>
              <li>
                <i className="fa-regular fa-user"></i> Change members
              </li>
              <li>
                <i className="fa-solid fa-credit-card"></i> Change cover
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i> Move
              </li>
              <li>
                <i className="fa-solid fa-credit-card"></i> Copy
              </li>
              <li>
                <i className="fa-regular fa-clock"></i> Edit dates
              </li>
              <li>
                <i className="fa-solid fa-box-archive"></i> Archive
              </li>
            </ul>
          </div>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default EditCard;
