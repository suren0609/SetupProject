import React from "react";

import styles from "./UserAvatar.module.scss";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors";

const UserAvatar = () => {
  const user = useSelector(userSelector);
  return (
    <div
      className={styles.UserAvatar}
    >{`${user.firstname[0]}${user.lastname[0]}`}</div>
  );
};

export default UserAvatar;
