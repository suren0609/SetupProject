import React, { FC } from "react";

import styles from "./CardTemplate.module.scss";

interface IProp {
  pos: {
    currentTop: number;
    currentLeft: number;
  };
  popupRef: any;
}

const CardTemplate: FC<IProp> = ({ pos, popupRef }) => {
  return (
    <div
      ref={popupRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      className={styles.cardTemplates}
    >
      <div className={styles.title}>
        <h4>Card templates</h4>
      </div>
      <div className={styles.templatesBody}>
        <div className={styles.template}>
          <h4>Authentication</h4>
          <div className={styles.tempLines}>
            <span>
              <i className="fa-solid fa-newspaper"></i>
              Template
            </span>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className={styles.template}>
          <h4>Authentication</h4>
          <div className={styles.tempLines}>
            <span>
              <i className="fa-solid fa-newspaper"></i>
              Template
            </span>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className={styles.template}>
          <h4>Authentication</h4>
          <div className={styles.tempLines}>
            <span>
              <i className="fa-solid fa-newspaper"></i>
              Template
            </span>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className={styles.createTemplate}>+ Create a new template</div>
      <button data-name="editButton">Edit templates</button>
    </div>
  );
};

export default CardTemplate;
