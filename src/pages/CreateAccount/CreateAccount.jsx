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
      alert("Enter username");
      return;
    }

    if (Number(age) < 18) {
      alert("You must be at least 18");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // useEffect(() => {
    //   fetch("http://localhost:5000", { method: "POST" });
    // }, []);

    alert("Account created successfully!");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setAccountCreated(true);
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
              onClick={() => navigate("/mainPage")}
            >
              Back to login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
