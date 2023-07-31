import React from "react";

import styles from "./CardTemplate.module.scss";

interface IProp {
  pos: {
    currentTop: number;
    currentLeft: number;
  };
  popupRef: any;
}

const CardTemplate = ({ pos, popupRef }: IProp) => {
  return (
    <div
      ref={popupRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      className={styles.cardTemplates}
    >
      <div className={styles.title}>
        <h4>Card templates</h4>
      </div>
      <div className={styles.templatesBody}></div>
      <div className={styles.createTemplate}>+ Create a new template</div>
      <button data-name="editButton">Edit templates</button>
    </div>
  );
};

export default CardTemplate;
