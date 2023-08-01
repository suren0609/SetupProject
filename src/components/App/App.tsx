import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { ProtectedAuth } from "hoc/ProtectedAuth";
import styles from "./App.module.scss";

function App() {
  const Home = ProtectedAuth(HomePage, "/login");
  const Login = ProtectedAuth(LoginPage, "/");
  const Register = ProtectedAuth(RegisterPage, "/");

  return (
    <div className={styles.leyout_content}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
