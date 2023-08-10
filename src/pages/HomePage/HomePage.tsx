import React, { useEffect, useState, MouseEvent } from "react";

import { HomeBody } from "components/HomeBody";

import { Layout } from "components/Layout";
import styles from "./HomePage.module.scss";
import { useDispatch } from "react-redux";
import {
  setAddActive,
  setIsMenuActive,
  setIsPopupActive,
} from "store/slices/popupSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const menuCloseHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(setIsMenuActive({ rightMenu: false, leftMenu: false }));
    dispatch(setIsPopupActive(false));
    dispatch(setAddActive(false));
  };

  return (
    <div className={styles.HomePage} onClick={(e) => menuCloseHandler(e)}>
      <Layout>
        <HomeBody />
      </Layout>
    </div>
  );
};

export default HomePage;
