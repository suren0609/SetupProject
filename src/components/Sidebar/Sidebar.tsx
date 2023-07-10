import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);
  const sidebarActiveHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={isActive ? styles.Sidebar : styles.sideBarNoActive}>
      <div className={styles.sidebarHeader}>
        <div className={styles.counts}>
          <div className={styles.count1}>4</div>
          <div className={styles.count2}>48</div>
        </div>
        <button className={styles.cntrlBtn} onClick={sidebarActiveHandler}>
          <i className="bx bx-chevron-left"></i>
        </button>
      </div>
      <div className={styles.sidebarBody}></div>
    </div>
  );
};

export default Sidebar;
