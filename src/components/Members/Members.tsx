import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./Members.module.scss";
import { UserAvatar } from "components/UserAvatar";
import { useSelector } from "react-redux";
import { IProp } from "store/types";
import { getPosition } from "helpers/getPosition";
import { getParameters } from "helpers/parametersForPosition";
import { userSelector } from "store/selectors";

const Members: FC<any> = ({ popupRef }: IProp) => {
  const user = useSelector(userSelector);
  const [pos, setPos] = useState({ currentTop: 40, currentLeft: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef) {
      const { top, left, height, width } = getParameters(popupRef, divRef);

      setPos((prevState) => {
        return {
          ...prevState,
          ...getPosition(width, height, top, left),
        };
      });
    }
  }, []);

  return (
    <div
      className={styles.Members}
      onClick={(e) => e.stopPropagation()}
      ref={divRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      data-name="inputOrButton"
    >
      <h4>Members</h4>
      <input
        type="text"
        data-name="inputOrButton"
        placeholder="Search members"
      />
      <div className={styles.boardMembers}>
        <h5>Board members</h5>
        <div className={styles.member}>
          <UserAvatar />
          <p>{`${user.firstname} ${user.lastname}`}</p>
        </div>
      </div>
      <button data-name="inputOrButton">Show other Workspace members</button>
    </div>
  );
};

export default Members;
