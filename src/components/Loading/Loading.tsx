import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
