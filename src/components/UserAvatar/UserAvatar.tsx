import React from "react";

import styles from "./UserAvatar.module.scss";
import { useSelector } from "react-redux";

const UserAvatar = () => {
  const user = useSelector((state: any) => state.user.user);
  return (
    <div
      className={styles.UserAvatar}
    >{`${user.firstname[0]}${user.lastname[0]}`}</div>
  );
};

export default UserAvatar;
