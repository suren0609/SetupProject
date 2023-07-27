import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./Cover.module.scss";
import { IProp } from "store/types";
import { getPosition } from "helpers/getPosition";

const Cover: FC<any> = ({ popupRef }: IProp) => {
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
      className={styles.Cover}
      ref={divRef}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
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
        <button>Upload a cover image</button>
      </div>
      <div className={styles.photos}>
        <h5>Photos from Unsplash</h5>
        <div className={styles.images}>
          <img
            src="https://img.freepik.com/premium-photo/searchlight-neon-brick-wall-with-smoke-neon-reflections-wet-asphalt-empty-scene-with-copy-space_117255-1836.jpg"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"
            alt=""
          />
          <img
            src="https://t4.ftcdn.net/jpg/04/03/50/35/360_F_403503589_CsPKIZI7L5YZqEhJLbwcfFPnICy21Ae3.jpg"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148879890.jpg?w=360"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-vector/watercolor-abstract-purple-background_23-2149120778.jpg?w=360"
            alt=""
          />
        </div>
        <button>Search for photos</button>
      </div>
    </div>
  );
};

export default Cover;
