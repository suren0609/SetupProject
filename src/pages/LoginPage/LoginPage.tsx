import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styles from "./LoginPage.module.scss"

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <div className={styles.formBlock}>
          <div className={styles.formTitle}>
            <h3>Login Form</h3>
          </div>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input className={styles.regBtn} type="submit" value="Login" />
            <div className={styles.loginRoute}><p>Don't have an accaunt?</p><Link to="/Register">Register</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage