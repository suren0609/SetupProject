import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { useDispatch } from "react-redux";
import { getPostsApi } from "../../store/actions";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsApi({ limit: 10 }));
  }, []);

  return (
    <div className={styles.leyout_content}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
