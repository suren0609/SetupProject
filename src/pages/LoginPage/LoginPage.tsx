import React from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "store/types";
import { loginUser } from "services/login";

import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { toastParameters } from "helpers/toastAlertParams";

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
    Cookies.set("token", res?.data?.token);
    if (res.statusText === "OK") {
      toast.success(res.data.message, toastParameters);
      navigate("/");
    } else {
      toast.error(res, toastParameters);
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
              style={{
                border: errors.email?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="Password"
              style={{
                border: errors.password?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.password?.message}</p>
            <input className={styles.regBtn} type="submit" value="Login" />
            <div className={styles.loginRoute}>
              <p>Don`t have an accaunt?</p>
              <Link to="/Register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
