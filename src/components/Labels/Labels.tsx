import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./Labels.module.scss";
import { getPosition } from "helpers/getPosition";
import { IProp } from "store/types";

const Labels: FC<any> = ({ popupRef }: IProp) => {
  const [pos, setPos] = useState({ currentTop: 40, currentLeft: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef) {
      const { top, left } = popupRef.current!.getBoundingClientRect();
      const { height, width } = divRef.current!.getBoundingClientRect();

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
      className={styles.Labels}
      ref={divRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
    >
      <div className={styles.title}>
        <h4>Labels</h4>
      </div>
      <input type="search" placeholder="Search labels..." />
      <div className={styles.colors}>
        <h5>Labels</h5>
        <div className={styles.color}>
          <input type="checkbox" />
          <div className={styles.color1}></div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div className={styles.color}>
          <input type="checkbox" />
          <div className={styles.color2}></div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div className={styles.color}>
          <input type="checkbox" />
          <div className={styles.color3}></div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div className={styles.color}>
          <input type="checkbox" />
          <div className={styles.color4}></div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div className={styles.color}>
          <input type="checkbox" />
          <div className={styles.color5}></div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div className={styles.color}>
          <input type="checkbox" />
          <div className={styles.color6}></div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <button>Create a new label</button>
      </div>
      <button>Enable colorblind friendly mode</button>
    </div>
  );
};

export default Labels;
