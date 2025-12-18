import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styles from "./HomeLogin.module.scss";

export default function HomeLogin() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((e) => e.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    const userExists = users.some(
      (user) => user.name === username && user.password === password
    );

    if (userExists) {
      navigate("/mainPage");
    } else {
      alert("Неверное имя или пароль");
    }
  }

  return (
    <div className={styles.home_login_container}>
      <div className={styles.login_box}>
        <h1 className={styles.login_title}>Welcome to the Home Login</h1>
        <form className={styles.login_form}>
          <input
            className={styles.login_input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.login_input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className={styles.login_button}
            type="submit"
          >
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
