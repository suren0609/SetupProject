import React from 'react'
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header} >
        <div className="headerLeft">
            <div className="logo"></div>
            <div className="controls"></div>
        </div>
        <div className="headerRight"></div>
    </div>
  )
}

export default Header