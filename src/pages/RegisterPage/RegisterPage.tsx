import React from "react";
import styles from "./RegisterPage.module.scss";
import { NavLink as Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className={styles.RegisterPage}>
      <div className={styles.container}>
        <div className={styles.formBlock}>
          <div className={styles.formTitle}>
            <h3>Registration Form</h3>
          </div>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="number" placeholder="Age" min={16} max={90} />
            <div className={styles.gender}>
              <input id="male" type="radio" name="gender" value="Male" />
              <label htmlFor="male">Male</label>
              <input id="female" type="radio" name="gender" value="Female" />
              <label htmlFor="femal">Female</label>
            </div>
            <input className={styles.regBtn} type="submit" value="Register" />
            <div className={styles.loginRoute}><p>Already have an accaunt?</p><Link to="/login">Login</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
