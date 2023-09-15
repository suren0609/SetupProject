import React from "react";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.NotFoundPage}>
      <i className="fa-regular fa-face-frown"></i>
      <h1>404</h1>
      <h4>Page not found</h4>
    </div>
  );
};

export default NotFoundPage;
