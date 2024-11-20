import React from "react";
import LoginForm from "../Components/LoginForm";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <div className={styles.loginPage}>
        <LoginForm />
        <div className={styles.topLeft}></div>
        <div className={styles.bottomLeft}></div>
      </div>
    </>
  );
}
