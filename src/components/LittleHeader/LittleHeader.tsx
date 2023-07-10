import React from "react";
import styles from "./LittleHeader.module.scss";

const LittleHeader = () => {
  return (
    <div className={styles.LittleHeader}>
      <div className={styles.littleHeadLeft}>
        <h4>Tasks</h4>
        <i id={styles.star} className="fa-regular fa-star"></i>
        <div className={styles.workspaceVisible}>
          <i className="fa-solid fa-user-group"></i>
          <p>Workspace visible</p>
        </div>
        <div className={styles.boardAndViews}>
          <button>
            <i className="fa-solid fa-chart-simple fa-rotate-180"></i>{" "}
            <span>Board</span>
          </button>
          <button>
            <i className="bx bx-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={styles.littleHeadRight}>
        <div className={styles.rightControls}>
          <div className={styles.sections}>
            <i className="fa-solid fa-rocket"></i>
            <p>Power-Ups</p>
          </div>
          <div className={styles.sections}>
            <i className="fa-solid fa-bolt-lightning"></i>
            <p>Automation</p>
          </div>
          <div className={styles.sections}>
            <i className="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
        <div className={styles.usersAndShare}>
          <div className={styles.usersList}>
            <div>SB</div>
            <div>HY</div>
            <div>GB</div>
            <div>VG</div>
          </div>
          <button>
            <i className="fa-solid fa-user-plus"></i> <span>Share</span>
          </button>
          <i id={styles.rightBurger} className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
};

export default LittleHeader;
