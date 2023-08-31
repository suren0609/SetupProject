import DefaultPageScreen from "components/DefaultPageScreen/DefaultPageScreen";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setAddActive,
  setIsMenuActive,
  setIsPopupActive,
} from "store/slices/popupSlice";
import styles from "./HomePage.module.scss";

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
      <DefaultPageScreen />
    </div>
  );
};

export default HomePage;
