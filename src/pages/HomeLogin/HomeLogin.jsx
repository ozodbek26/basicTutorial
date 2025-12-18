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
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    const currentUser = users.find(
      (user) => user.name === username && user.password === password
    );

    if (!currentUser) {
      alert("Неверное имя или пароль");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    navigate("/mainPage");
  }

  return (
    <div className={styles.home_login_container}>
      <div className={styles.login_box}>
        <h1 className={styles.login_title}>Login</h1>

        <form className={styles.login_form} onSubmit={handleLogin}>
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
