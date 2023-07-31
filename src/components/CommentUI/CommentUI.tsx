import React from "react";

import styles from "./CommentUI.module.scss";
import { UserAvatar } from "components/UserAvatar";

const CommentUI = () => {
  return (
    <div className={styles.CommentUI}>
      <div className={styles.user}>
        <UserAvatar />
      </div>
      <div className={styles.commentAndDate}>
        <div className={styles.nameDate}>
          <h5>Suren Balayan</h5> <p>jun 21 at 6:48 PM</p>
        </div>
        <div className={styles.comment}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          fugit consequatur dolorum enim labore exercitationem impedit
          distinctio magnam delectus quis.
        </div>
      </div>
    </div>
  );
};

export default CommentUI;
