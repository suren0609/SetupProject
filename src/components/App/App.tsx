import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPostsApi, getUser } from "../../store/actions";

import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { ProtectedAuth } from "hoc/ProtectedAuth";

function App() {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUser());
  }, []);

  // ProtectedAuth(<HomePage /> ReactNode);

  const user = useSelector((state: any) => state.user);
  console.log(user);
  

  return (
    <div className={styles.leyout_content}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;