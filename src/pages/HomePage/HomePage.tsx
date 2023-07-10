import React from "react";
import styles from "./HomePage.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeBody from "../../components/HomeBody/HomeBody";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <div className={styles.HomeBodyContainer}>
        <Sidebar />
        <HomeBody />
      </div>
    </div>
  );
};

export default HomePage;
