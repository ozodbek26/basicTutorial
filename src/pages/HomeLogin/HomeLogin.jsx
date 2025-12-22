import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeLogin.module.scss";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

export default function HomeLogin() {
  const { t } = useTranslation();

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
      alert(t("login.invalidCredentials"));
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    navigate("/mainPage");
  }

  return (
    <div className={styles.home_login_container}>
      <div className={styles.qwe}>
        <BurgerMenu />
      </div>
      <div className={styles.login_box}>
        <h1 className={styles.login_title}>{t("login.title")}</h1>

        <form className={styles.login_form} onSubmit={handleLogin}>
          <input
            className={styles.login_input}
            type="text"
            placeholder={t("login.usernamePlaceholder")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={styles.login_input}
            type="password"
            placeholder={t("login.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.login_button} type="submit">
            {t("login.button")}
          </button>
        </form>

        <div className={styles.login_link}>
          <a href="/createAccount">{t("login.noAccount")}</a>
        </div>
      </div>
    </div>
  );
}
