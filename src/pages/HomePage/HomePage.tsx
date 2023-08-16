import React, { useEffect, useState, MouseEvent } from "react";

import { HomeBody } from "components/HomeBody";

import { Layout } from "components/Layout";
import styles from "./HomePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddActive,
  setIsMenuActive,
  setIsPopupActive,
} from "store/slices/popupSlice";
import { useParams } from "react-router-dom";
import { IBoardResponse } from "store/types";
import { setCurrentBoard } from "store/slices/boardSlice";
import { getOneBoardAction } from "store/actions";

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
        <h2>hellooo</h2>
      </Layout>
    </div>
  );
};

export default HomePage;
