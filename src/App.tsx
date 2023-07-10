import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, getPostsApi } from "./store/actions";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { setIsMenuActive } from "./store/slices";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsApi({ limit: 10 }));
  }, []);

  return (
    <div
      className={styles.leyout_content}
      onClick={() => dispatch(setIsMenuActive(false))}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
