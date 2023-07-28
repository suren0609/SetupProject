import React from "react";

import styles from "./CommentUI.module.scss";
import { UserAvatar } from "components/UserAvatar";

const CommentUI = () => {
  return (
    <div className={styles.CommentUI}>
      <div className={styles.user}>
        <UserAvatar />
        <div>
          <h5>Suren Balayan</h5>
          <p>Yesterday at 4:18 PM</p>
        </div>
      </div>
    </div>
  );
};

export default CommentUI;
