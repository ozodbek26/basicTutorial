import React, { useState } from "react";
import styles from "./CreateAccount.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CreateAccount() {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username) return alert(t("createAccount.alertUsername"));
    if (Number(age) < 18) return alert(t("createAccount.alertAge"));
    if (password.length < 8) return alert(t("createAccount.alertPasswordLength"));
    if (password !== confirmPassword) return alert(t("createAccount.alertPasswordMatch"));
    if (!file) return alert(t("createAccount.alertFile"));
    if (file.type !== "image/png") return alert(t("createAccount.alertPngOnly"));

    try {
      const base64Image = await fileToBase64(file);

      const newUser = {
        name: username,
        password: password,
        age: age,
        img: base64Image,
      };

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      console.log("Аккаунт создан:", data);

      alert(t("createAccount.success"));
      setAccountCreated(true);

      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setAge("");
      setFile(null);
      setPreview("");
    } catch (err) {
      console.error(err);
      alert(t("createAccount.error"));
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    }
  };

  return (
    <div className={styles.create_account_container}>
      <div className={styles.create_account_box}>
        <h1 className={styles.create_account_title}>
          {t("createAccount.title")}
        </h1>

        <form className={styles.create_account_form} onSubmit={handleSubmit}>
          <input
            placeholder={t("createAccount.usernamePlaceholder")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.create_account_input}
          />
          <input
            type="password"
            placeholder={t("createAccount.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.create_account_input}
          />
          <input
            type="password"
            placeholder={t("createAccount.confirmPasswordPlaceholder")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.create_account_input}
          />
          <input
            type="number"
            placeholder={t("createAccount.agePlaceholder")}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={styles.create_account_input}
          />

          <input
            type="file"
            accept="image/png"
            onChange={handleFileChange}
            className={styles.create_account_input}
          />

          {preview && (
            <img
              src={preview}
              alt={t("createAccount.previewAlt")}
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                marginTop: 10,
                borderRadius: 8,
              }}
            />
          )}

          <button type="submit" className={styles.create_account_button}>
            {t("createAccount.createButton")}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className={styles.create_account_button}
          >
            {t("createAccount.backToLogin")}
          </button>
        </form>
      </div>
    </div>
  );
}