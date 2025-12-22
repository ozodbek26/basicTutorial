import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./UserProfile.module.scss";
import profilePicture from "../../assets/images/profilePicture.png";

export default function UserProfile() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className={styles.profile_container}>{t("profile.notLoggedIn")}</div>
    );
  }

  return (
    <div className={styles.profile_container}>
      <div className={styles.header}>
        <h1>{t("profile.title")}</h1>
        <div className={styles.blkck23}>
          <button
            className={styles.edit_button}
            onClick={() => navigate("/mainPage")}
          >
            {t("profile.backButton")}
          </button>
          <button
            className={styles.edit_button2}
            onClick={() => {
              localStorage.removeItem("currentUser");
              navigate("/");
            }}
          >
            {t("profile.exitButton")}
          </button>
        </div>
      </div>

      <div className={styles.profile_card}>
        <img
          src={user.img ? user.img : profilePicture}
          alt={t("profile.avatarAlt")}
          className={styles.profile_avatar}
        />

        <div className={styles.profile_info}>
          <h2>{user.name}</h2>
          <p>
            {t("profile.ageLabel")}: {user.age}
          </p>
          <p>
            {t("profile.idLabel")}: {user.id}
          </p>
        </div>
      </div>
    </div>
  );
}
