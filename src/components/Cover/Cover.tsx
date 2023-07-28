import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./Cover.module.scss";
import { IProp } from "store/types";
import { getPosition } from "helpers/getPosition";
import { img1, img2, img3, img4, img5, img6 } from "imagesUrls";
import { getParameters } from "helpers/parametersForPosition";

const Cover: FC<any> = ({ popupRef }: IProp) => {
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
      onClick={(e) => e.stopPropagation()}
      className={styles.Cover}
      ref={divRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      data-name="inputOrButton"
    >
      <div className={styles.title}>
        <h4>Cover</h4>
      </div>
      <div className={styles.colors}>
        <h5>Colors</h5>
        <div className={styles.colorList}>
          <div className={styles.color1}></div>
          <div className={styles.color2}></div>
          <div className={styles.color3}></div>
          <div className={styles.color4}></div>
          <div className={styles.color5}></div>
          <div className={styles.color6}></div>
          <div className={styles.color7}></div>
          <div className={styles.color8}></div>
          <div className={styles.color9}></div>
          <div className={styles.color10}></div>
        </div>
      </div>
      <div className={styles.attachments}>
        <h5>Attachments</h5>
        <button data-name="inputOrButton">Upload a cover image</button>
      </div>
      <div className={styles.photos}>
        <h5>Photos from Unsplash</h5>
        <div className={styles.images}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <button data-name="inputOrButton">Search for photos</button>
      </div>
    </div>
  );
};

export default Cover;
