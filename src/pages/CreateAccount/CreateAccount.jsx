import React, { useEffect, useState } from "react";
import styles from "./CreateAccount.module.scss";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) {
      alert("Введите имя пользователя");
      return;
    }

    if (Number(age) < 18) {
      alert("Укажите возраст — вам должно быть не менее 18 лет");
      return;
    }

    if (password.length < 8) {
      alert("Пароль должен содержать минимум 8 символов");
      return;
    }

    if (password !== confirmPassword) {
      alert("Пароли не совпадают. Проверьте и попробуйте снова");
      return;
    }

    const newUser = { name: username, password: password, age: age };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Ответ сервера:", data);
        alert("Аккаунт успешно создан");
        setAccountCreated(true);

        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setAge("");
      })
      .catch((err) => {
        console.log("Ошибка запроса:", err);
        alert("Ошибка при создании аккаунта");
      });
  }

  return (
    <div className={styles.create_account_container}>
      <div className={styles.create_account_box}>
        <h1 className={styles.create_account_title}>Create Account</h1>

        <form className={styles.create_account_form} onSubmit={handleSubmit}>
          <input
            className={styles.create_account_input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={styles.create_account_input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className={styles.create_account_input}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <input
            className={styles.create_account_input}
            type="number"
            placeholder="How old are you"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button className={styles.create_account_button} type="submit">
            Create Account
          </button>

          {accountCreated && (
            <button
              className={styles.create_account_button}
              type="button"
              onClick={() => navigate("/")}
            >
              Back to login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
