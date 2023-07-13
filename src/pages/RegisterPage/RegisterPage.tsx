import React from "react";
import styles from "./RegisterPage.module.scss";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "store/types";
import { registerUser } from "services/register";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { errorAlert, successAlert } from "helpers/toastAlert";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(38)
    .required()
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\S+$/),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null as any], "Passwords must match")
    .required(),
  age: yup.string().required(),
  gender: yup.string().required(),
});

const RegisterPage = () => {
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

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    const res = await registerUser(data);

    if (res.statusText === "OK") {
      successAlert(res.data);
      navigate("/login");
    } else {
      errorAlert(res);
    }
  };

  return (
    <div className={styles.RegisterPage}>
      <div className={styles.container}>
        <div className={styles.formBlock}>
          <div className={styles.formTitle}>
            <h3>Registration Form</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, (errors) => {
              console.log("errors -> ", errors);
            })}
          >
            <input
              {...register("firstName")}
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <p>{errors.firstName?.message}</p>
            <input
              {...register("lastName")}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <p>{errors.lastName?.message}</p>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="Password"
            />
            <p>{errors.password?.message}</p>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <p>{errors.confirmPassword?.message as string}</p>
            <p>{}</p>
            <input
              {...register("age")}
              type="date"
              name="age"
              placeholder="Age"
            />
            <p>{errors.age?.message}</p>
            <div className={styles.gender}>
              <input
                {...register("gender")}
                id="male"
                type="radio"
                name="gender"
                value="Male"
              />
              <label htmlFor="male">Male</label>
              <input
                {...register("gender")}
                id="female"
                type="radio"
                name="gender"
                value="Female"
              />
              <label htmlFor="femal">Female</label>
            </div>
            <p>{errors.gender?.message}</p>
            <input className={styles.regBtn} type="submit" value="Register" />
            <div className={styles.loginRoute}>
              <p className={styles.route}>Already have an accaunt?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
