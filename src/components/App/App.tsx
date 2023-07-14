import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { ProtectedAuth } from "hoc/ProtectedAuth";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.leyout_content}>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedAuth path="/login">
              <HomePage />
            </ProtectedAuth>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedAuth path="/">
              <LoginPage />
            </ProtectedAuth>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedAuth path="/">
              <RegisterPage />
            </ProtectedAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
