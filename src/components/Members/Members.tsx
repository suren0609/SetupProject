import React from "react";

import styles from "./Members.module.scss";
import { UserAvatar } from "components/UserAvatar";
import { useSelector } from "react-redux";

interface IPopupPos {
  popupPosition: {
    top: number;
    left: number;
  };
}

const Members = ({ popupPosition }: IPopupPos) => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div
      className={styles.Members}
      style={{
        left: popupPosition.left,
        top: popupPosition.top + 40,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <h4>Members</h4>
      <input
        type="text"
        data-name="search-members"
        placeholder="Search members"
      />
      <div className={styles.boardMembers}>
        <h5>Board members</h5>
        <div className={styles.member}>
          <UserAvatar />
          <p>{`${user.firstname} ${user.lastname}`}</p>
        </div>
      </div>
      <button data-name="show-workspace">Show other Workspace members</button>
    </div>
  );
};

export default Members;
