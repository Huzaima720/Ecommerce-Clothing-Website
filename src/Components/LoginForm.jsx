import React from "react";
import styles from "../Pages/LoginPage.module.css";
import { FaRegUser , FaLock } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";

import googleLogo from '../assets/google.png';

export default function LoginForm() {
  return (
    <>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <h3>Please enter your Email and Password</h3>
        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <FaRegUser  className={styles.icon}/>
            <input type="email" placeholder="Username or Email" />
          </div>

          <div className={styles.inputGroup}>
            <MdLockOutline  className={styles.icon}/>
            <input type="email" placeholder="Password" />
          </div>

          <div className={styles.loginOptions}>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className={styles.loginButton}>Login</button>

          <button type="button" className={styles.googleLoginButton}>
            <img src={googleLogo} alt="Google logo" /> Or, sign-in with Google
          </button>
          <p className={styles.registerLink}>
            Not a member yet? <a >Register!</a>
          </p>
        </form>
      </div>
    </>
  );
}
