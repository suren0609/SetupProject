import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/types";
import { setIsMenuActive } from "../../store/slices";

const Header = () => {
  const isMenuActive = useSelector((state: IState) => state.isMenuActive);
  const dispatch = useDispatch();

  return (
    <div className={styles.Header}>
      <div className={styles.headerLeft}>
        <i className={`${styles.gridMenu} bx bxs-grid`}></i>
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            height="36"
            viewBox="0 0 312 64"
            width="126"
            className="d-block"
          >
            <linearGradient
              id="trello-logo-default"
              x1="50.048061%"
              x2="50.048061%"
              y1="100%"
              y2="0%"
            >
              <stop offset="0" stop-color="#0052cc" />
              <stop offset="1" stop-color="#2684ff" />
            </linearGradient>
            <g fill="none" fill-rule="evenodd">
              <path
                d="m55.59.07h-47.59c-4.09405078 0-7.41448241 3.31595294-7.42006073 7.41v47.52c-.00791682 1.9730991.77030774 3.8681213 2.16269326 5.2661365 1.39238553 1.3980151 3.28425224 2.1838635 5.25736747 2.1838635h47.59c1.9713817-.0026407 3.8606757-.7896772 5.250897-2.1874031s2.1670753-3.2912295 2.1591638-5.2625969v-47.52c-.0055694-4.09014608-3.3199147-7.40449138-7.4100608-7.41zm-28.09 44.93c-.0026377.6594819-.2678382 1.2907542-.7369724 1.7542587-.4691341.4635046-1.1035619.721065-1.7630276.7158222h-10.4c-1.3602365-.005588-2.46-1.1098333-2.46-2.4700809v-30.95c0-1.3602476 1.0997635-2.4644929 2.46-2.47h10.4c1.3618668.0054804 2.4645196 1.1081332 2.47 2.47zm24-14.21c0 .6603158-.2642968 1.2931595-.7340204 1.7572465-.4697237.464087-1.1057125.7207735-1.7659796.7129359h-10.4c-1.3618668-.0056628-2.4645196-1.1083156-2.47-2.4701824v-16.74c.0054804-1.3618668 1.1081332-2.4645196 2.47-2.47h10.4c1.3602365.0055071 2.4600111 1.1097524 2.46 2.47z"
                fill="url(#trello-logo-default)"
              />
              <g fill="#293856" fill-rule="nonzero" transform="translate(87)">
                <path d="m42.92 4.64v12.06h-14.29v45.75h-13.78v-45.75h-14.29v-12.06z" />
                <path d="m60.46 62.45h-12.74v-45h12.74v8.62c2.42-6.07 6.29-9.68 13.18-9.24v13.33c-9-.7-13.18 1.5-13.18 8.71z" />
                <path d="m143.24 62.8c-8.35 0-13.6-4-13.6-13.46v-49.27h12.83v47.51c0 2.73 1.8 3.7 4 3.7.634638.0128631 1.269419-.0172055 1.9-.09v11.09c-1.677893.4087549-3.404213.5837425-5.13.52z" />
                <path d="m170 62.8c-8.35 0-13.61-4-13.61-13.46v-49.27h12.83v47.51c0 2.73 1.81 3.7 4.05 3.7.631315.0130885 1.262786-.0169816 1.89-.09v11.09c-1.687411.4126716-3.42418.5876949-5.16.52z" />
                <path d="m181.31 39.93c0-13.9 8-23.41 21.78-23.41s21.61 9.48 21.61 23.41-7.92 23.58-21.61 23.58-21.78-9.77-21.78-23.58zm12.49 0c0 6.77 2.84 12.14 9.29 12.14s9.13-5.37 9.13-12.14-2.75-12-9.13-12-9.29 5.22-9.29 12z" />
                <path d="m90.84 44c3.5670052.3919324 7.1516349.602204 10.74.63 9.76 0 18-2.62 18-12.07 0-9.17-8.47-16.06-18.66-16.06-13.72 0-22.51 9.95-22.51 23.85 0 14.43 7.58 23 24.71 23 5.081836.0413682 10.127233-.8605644 14.88-2.66v-10.78c-4.4 1.41-9.35 2.81-14.43 2.81-6.82 0-11.57-2.24-12.73-8.72zm9.82-17.68c3.61 0 6.51 2.45 6.51 5.8 0 4.31-4.55 5.66-9.79 5.66-2.2301144-.0102442-4.4563338-.1874058-6.66-.53.1664561-2.1013033.7692883-4.1448022 1.77-6 1.6348247-2.9938883 4.7590565-4.8714866 8.17-4.91z" />
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.controls}>
          <ul>
            <li>
              Workspases{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
            <li>
              Recent{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
            <li>
              Starred{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
            <li>
              Templates{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
          </ul>
          <button>Create</button>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.controls2}>
          <div className={styles.search}>
            <input type="search" placeholder="Search" />
          </div>

          <i className="bx bx-bell"></i>
          <i className="fa-regular fa-circle-question"></i>
          <i className="fa-solid fa-circle-half-stroke"></i>
          <div className={styles.userAva}>SB</div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div className={styles.close}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className={styles.tasksAndCount}>
          <h4>Tasks</h4>
          <p>48</p>
        </div>
      </div>
      <div className={styles.logoResp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          height="36"
          viewBox="0 0 312 64"
          width="126"
          className="d-block"
        >
          <linearGradient
            id="trello-logo-default"
            x1="50.048061%"
            x2="50.048061%"
            y1="100%"
            y2="0%"
          >
            <stop offset="0" stop-color="#0052cc" />
            <stop offset="1" stop-color="#2684ff" />
          </linearGradient>
          <g fill="none" fill-rule="evenodd">
            <path
              d="m55.59.07h-47.59c-4.09405078 0-7.41448241 3.31595294-7.42006073 7.41v47.52c-.00791682 1.9730991.77030774 3.8681213 2.16269326 5.2661365 1.39238553 1.3980151 3.28425224 2.1838635 5.25736747 2.1838635h47.59c1.9713817-.0026407 3.8606757-.7896772 5.250897-2.1874031s2.1670753-3.2912295 2.1591638-5.2625969v-47.52c-.0055694-4.09014608-3.3199147-7.40449138-7.4100608-7.41zm-28.09 44.93c-.0026377.6594819-.2678382 1.2907542-.7369724 1.7542587-.4691341.4635046-1.1035619.721065-1.7630276.7158222h-10.4c-1.3602365-.005588-2.46-1.1098333-2.46-2.4700809v-30.95c0-1.3602476 1.0997635-2.4644929 2.46-2.47h10.4c1.3618668.0054804 2.4645196 1.1081332 2.47 2.47zm24-14.21c0 .6603158-.2642968 1.2931595-.7340204 1.7572465-.4697237.464087-1.1057125.7207735-1.7659796.7129359h-10.4c-1.3618668-.0056628-2.4645196-1.1083156-2.47-2.4701824v-16.74c.0054804-1.3618668 1.1081332-2.4645196 2.47-2.47h10.4c1.3602365.0055071 2.4600111 1.1097524 2.46 2.47z"
              fill="url(#trello-logo-default)"
            />
            <g fill="#293856" fill-rule="nonzero" transform="translate(87)">
              <path d="m42.92 4.64v12.06h-14.29v45.75h-13.78v-45.75h-14.29v-12.06z" />
              <path d="m60.46 62.45h-12.74v-45h12.74v8.62c2.42-6.07 6.29-9.68 13.18-9.24v13.33c-9-.7-13.18 1.5-13.18 8.71z" />
              <path d="m143.24 62.8c-8.35 0-13.6-4-13.6-13.46v-49.27h12.83v47.51c0 2.73 1.8 3.7 4 3.7.634638.0128631 1.269419-.0172055 1.9-.09v11.09c-1.677893.4087549-3.404213.5837425-5.13.52z" />
              <path d="m170 62.8c-8.35 0-13.61-4-13.61-13.46v-49.27h12.83v47.51c0 2.73 1.81 3.7 4.05 3.7.631315.0130885 1.262786-.0169816 1.89-.09v11.09c-1.687411.4126716-3.42418.5876949-5.16.52z" />
              <path d="m181.31 39.93c0-13.9 8-23.41 21.78-23.41s21.61 9.48 21.61 23.41-7.92 23.58-21.61 23.58-21.78-9.77-21.78-23.58zm12.49 0c0 6.77 2.84 12.14 9.29 12.14s9.13-5.37 9.13-12.14-2.75-12-9.13-12-9.29 5.22-9.29 12z" />
              <path d="m90.84 44c3.5670052.3919324 7.1516349.602204 10.74.63 9.76 0 18-2.62 18-12.07 0-9.17-8.47-16.06-18.66-16.06-13.72 0-22.51 9.95-22.51 23.85 0 14.43 7.58 23 24.71 23 5.081836.0413682 10.127233-.8605644 14.88-2.66v-10.78c-4.4 1.41-9.35 2.81-14.43 2.81-6.82 0-11.57-2.24-12.73-8.72zm9.82-17.68c3.61 0 6.51 2.45 6.51 5.8 0 4.31-4.55 5.66-9.79 5.66-2.2301144-.0102442-4.4563338-.1874058-6.66-.53.1664561-2.1013033.7692883-4.1448022 1.77-6 1.6348247-2.9938883 4.7590565-4.8714866 8.17-4.91z" />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.burgerAndSearch}>
        <div className={styles.searchResp}>
          <input type="search" />
        </div>
        <div className={styles.notifi}>
          <i className="fa-regular fa-bell"></i>
        </div>

        <div className={styles.burgerResp}>
          <i
            className="fa-solid fa-ellipsis"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setIsMenuActive(!isMenuActive))
            }}
          ></i>
          <div
            className={styles.controlsResp}
            style={{ display: isMenuActive ? "block" : "none" }}
          >
            <ul>
              <li>
                Workspases{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
              <li>
                Recent{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
              <li>
                Starred{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
              <li>
                Templates{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
            </ul>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
