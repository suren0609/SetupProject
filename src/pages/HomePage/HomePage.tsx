import React, { useEffect, useState, MouseEvent } from "react";
import { Sidebar } from "components/Sidebar";
import { HomeBody } from "components/HomeBody";
import { Header } from "../../components/Header";
import { getUser } from "store/actions";
import { useDispatch } from "react-redux";
import styles from "./HomePage.module.scss";
import { TaskDescription } from "components/TaskDescription";

const HomePage = () => {
  const [isMenuActive, setIsMenuActive] = useState({
    leftMenu: false,
    rightMenu: false,
  });
  const dispatch = useDispatch();

  const [isProfilePopupActive, setIsPopupActive] = useState(false);

  const [isAddActive, setAddActive] = useState(false);

  const changeAddIsActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAddActive((prev) => !prev);
  };

  const ChangeprofilePopupState = () => {
    setIsPopupActive(!isProfilePopupActive);
    setIsMenuActive({ rightMenu: false, leftMenu: false });
  };

  const changeMenuState = (leftOrRight: string) => {
    setIsPopupActive(false);
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
    setIsPopupActive(false);
    setAddActive(false);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={styles.HomePage} onClick={(e) => menuCloseHandler(e)}>
      <Header
        isMenuActive={isMenuActive}
        changeMenuState={changeMenuState}
        ChangeprofilePopupState={ChangeprofilePopupState}
        isProfilePopupActive={isProfilePopupActive}
      />
      <div className={styles.HomeBodyContainer}>
        <Sidebar />
        <HomeBody
          isAddActive={isAddActive}
          changeAddIsActive={changeAddIsActive}
        />
      </div>
      <TaskDescription />
    </div>
  );
};

export default HomePage;
