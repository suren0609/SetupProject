import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./Copy.module.scss";
import { IProp } from "store/types";
import { getPosition } from "helpers/getPosition";
import { getParameters } from "helpers/parametersForPosition";

const Copy: FC<any> = ({ popupRef }: IProp) => {
  const [pos, setPos] = useState({ currentTop: -390, currentLeft: 0 });
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
      onClick={(e) => e.stopPropagation()}
      className={styles.Copy}
      ref={divRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      data-name="inputOrButton"
    >
      <div className={styles.title}>
        <h4>Copy card</h4>
      </div>
      <div className={styles.titleArea}>
        <h5>Title</h5>
        <textarea data-name="inputOrButton"></textarea>
      </div>
      <div className={styles.keep}>
        <h5>Keep...</h5>
        <div className={styles.checkboxes}>
          <label>
            <input data-name="inputOrButton" type="checkbox" />
            Members(1)
          </label>
          <label>
            <input data-name="inputOrButton" type="checkbox" />
            Comments(1)
          </label>
        </div>
      </div>
      <div className={styles.copyTo}>
        <h5>Copy to...</h5>
        <div className={styles.BoardBtn}>
          <p>Board</p>
          <span>Tasks</span>
        </div>
        <div className={styles.listPosition}>
          <div className={styles.list}>
            <p>List</p> <span>In progress</span>
          </div>
          <div className={styles.position}>
            <p>Position</p>
            <span>2</span>{" "}
          </div>
        </div>
      </div>
      <button data-name="inputOrButton">Created card</button>
    </div>
  );
};

export default Copy;
