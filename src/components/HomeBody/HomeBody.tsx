import React from "react";
import styles from "./HomeBody.module.scss";
import LittleHeader from "../LittleHeader/LittleHeader";
import HomeDetails from "../HomeDetails/HomeDetails";

const HomeBody = () => {
  return (
    <div className={styles.homeBodyWhenSideActive}>
      <LittleHeader />
      <HomeDetails />
    </div>
  );
};

export default HomeBody;
