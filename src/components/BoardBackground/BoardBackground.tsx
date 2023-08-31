import { useEffect, useRef } from "react";

import {
  bg1,
  bg10,
  bg11,
  bg12,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
} from "imagesUrls";
import { useDispatch, useSelector } from "react-redux";
import { popupState } from "store/selectors";
import { setCurrentBg } from "store/slices/boardSlice";
import { setBoardBackgroundActive } from "store/slices/popupSlice";
import styles from "./BoardBackground.module.scss";

const BoardBackground = () => {
  const currentBg = useSelector((state: any) => state.board.currentBg);
  const { top, left } = useSelector(
    (state: any) => state.popup.boardBackgroundPos,
  );
  const { isBoardBackgroundActive } = useSelector(popupState);
  const dispatch = useDispatch();

  const changeBackground = (cn: string) => {
    dispatch(setCurrentBg(cn));
  };

  const closeBackgrounds = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    dispatch(setBoardBackgroundActive(false));
  };

  const backgroundsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    backgroundsRef.current?.focus();
  }, []);

  return (
    <>
      {isBoardBackgroundActive ? (
        <div
          onBlur={closeBackgrounds}
          className={styles.BoardBackground}
          style={{ top: top - 200, left: left + 50 }}
          ref={backgroundsRef}
          tabIndex={0}
          data-name="inputOrButton"
        >
          <div className={styles.title}>
            <h4>Board background</h4>
            <i onClick={closeBackgrounds} className="fa-solid fa-xmark"></i>
          </div>
          <div className={styles.blocks}>
            <div className={styles.titleAndMore}>
              <h4>Photos</h4>
              <button className={styles.moreBtn}>See more</button>
            </div>
            <div className={styles.backgrounds}>
              <div
                onClick={() => changeBackground(bg6)}
                className={`${styles.bg} ${styles.bg6}`}
              >
                {currentBg === bg6 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg7)}
                className={`${styles.bg} ${styles.bg7}`}
              >
                {currentBg === bg7 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg8)}
                className={`${styles.bg} ${styles.bg8}`}
              >
                {currentBg === bg8 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg9)}
                className={`${styles.bg} ${styles.bg9}`}
              >
                {currentBg === bg9 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg10)}
                className={`${styles.bg} ${styles.bg10}`}
              >
                {currentBg === bg10 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg11)}
                className={`${styles.bg} ${styles.bg11}`}
              >
                {currentBg === bg11 && <i className="fa-solid fa-check"></i>}
              </div>
            </div>
          </div>
          <div className={styles.blocks}>
            <div className={styles.titleAndMore}>
              <h4>Colors</h4>
              <button className={styles.moreBtn}>See more</button>
            </div>
            <div className={styles.backgrounds}>
              <div
                onClick={() => changeBackground(bg1)}
                className={`${styles.bg} ${styles.bg1}`}
              >
                {currentBg === bg1 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg2)}
                className={`${styles.bg} ${styles.bg2}`}
              >
                {currentBg === bg2 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg3)}
                className={`${styles.bg} ${styles.bg3}`}
              >
                {currentBg === bg3 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg4)}
                className={`${styles.bg} ${styles.bg4}`}
              >
                {currentBg === bg4 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg5)}
                className={`${styles.bg} ${styles.bg5}`}
              >
                {currentBg === bg5 && <i className="fa-solid fa-check"></i>}
              </div>
              <div
                onClick={() => changeBackground(bg12)}
                className={`${styles.bg} ${styles.bg12}`}
              >
                {currentBg === bg12 && <i className="fa-solid fa-check"></i>}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BoardBackground;
