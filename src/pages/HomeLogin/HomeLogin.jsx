import React from "react";
import styles from "./HomeLogin.module.scss";

export default function HomeLogin() {
  return (
    <div className={styles.home_login_container}>
      <div className={styles.login_box}>
        <h1 className={styles.login_title}>Welcome to the Home Login</h1>
        <form className={styles.login_form}>
          <input
            className={styles.login_input}
            type="text"
            placeholder="Username"
          />
          <input
            className={styles.login_input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.login_button} type="submit">
            Login
          </button>
        </form>
        <div className={styles.login_link}>
          <a href="/createAccount">I don't have an account</a>
        </div>
      </div>
    </div>
  );
}
