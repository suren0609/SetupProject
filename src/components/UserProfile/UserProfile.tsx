import React from "react";

import styles from "./UserProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsUserProfileActive } from "store/slices";
import { userProfilePosSelector, userSelector } from "store/selectors";

const UserProfile = () => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(setIsUserProfileActive(false));
  };
  const userProfilePos = useSelector(userProfilePosSelector);

  return (
    <div
      className={styles.UserProfile}
      style={{ top: userProfilePos.top, left: userProfilePos.left }}
      data-name="userProfile"
      tabIndex={0}
    >
      <div className={styles.header}>
        <div className={styles.avatar}>
          {`${user.firstname[0]}${user.lastname[0]}`}
        </div>
        <div className={styles.userData}>
          <h4>{`${user.firstname} ${user.lastname}`}</h4>
          <p>{user.email}</p>
        </div>
        <div className={styles.close}>
          <i onClick={closePopup} className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className={styles.infoAndRemove}>Edit profile info</div>

      <div className={styles.infoAndRemove}>Remove from card</div>
    </div>
  );
};

export default UserProfile;
