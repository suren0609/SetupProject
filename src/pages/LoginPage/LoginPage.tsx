import React from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "store/types";
import { loginUser } from "services/login";


import Cookies from "js-cookie";
import { errorAlert, successAlert } from "helpers/toastAlert";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(38)
    .required()
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\S+$/),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const res = await loginUser(data);
    console.log(res);
    Cookies.set("token", res.data.token);
    if (res.statusText === "OK") {
      successAlert(res.data.message);
      navigate("/");
    } else {
      errorAlert(res);
    }
  };

  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <div className={styles.formBlock}>
          <div className={styles.formTitle}>
            <h3>Login Form</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="Password"
            />
            <input className={styles.regBtn} type="submit" value="Login" />
            <div className={styles.loginRoute}>
              <p>Don't have an accaunt?</p>
              <Link to="/Register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
