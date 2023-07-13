import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import { Sidebar } from "components/Sidebar";
import { HomeBody } from "components/HomeBody";
import { Header } from "../../components/Header";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const HomePage = () => {
  const [isMenuActive, setIsMenuActive] = useState({
    leftMenu: false,
    rightMenu: false,
  });

  const changeMenuState = (leftOrRight: string) => {
    leftOrRight === "left"
      ? setIsMenuActive({ rightMenu: false, leftMenu: !isMenuActive.leftMenu })
      : setIsMenuActive({
          leftMenu: false,
          rightMenu: !isMenuActive.rightMenu,
        });
  };

  const menuCloseHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsMenuActive({ rightMenu: false, leftMenu: false });
  };

  const cookie = Cookies.get("token");
  if (!cookie) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles.HomePage} onClick={(e) => menuCloseHandler(e)}>
      <Header isMenuActive={isMenuActive} changeMenuState={changeMenuState} />
      <div className={styles.HomeBodyContainer}>
        <Sidebar />
        <HomeBody />
      </div>
    </div>
  );
};

export default HomePage;
