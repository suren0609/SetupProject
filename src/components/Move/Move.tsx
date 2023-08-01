import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./Move.module.scss";
import { IProp } from "store/types";
import { getPosition } from "helpers/getPosition";
import { getParameters } from "helpers/parametersForPosition";

const Move: FC<any> = ({ popupRef }: IProp) => {
  const [pos, setPos] = useState({ currentTop: -350, currentLeft: 0 });
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
      className={styles.Move}
      ref={divRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      data-name="inputOrButton"
    >
      <div className={styles.title}>
        <h4>Move card</h4>
      </div>
      <div className={styles.suggested}>
        <h5>Suggested</h5>
        <div className={styles.suggBtn}>
          <i className="fa-solid fa-arrow-right"></i>
          <span>Review</span>
        </div>
        <div className={styles.suggBtn}>
          <i className="fa-solid fa-arrow-right fa-rotate-180"></i>
          <span>To do</span>
        </div>
      </div>
      <div className={styles.destination}>
        <h5>Select destination</h5>
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
      <button data-name="inputOrButton">Move</button>
    </div>
  );
};

export default Move;
