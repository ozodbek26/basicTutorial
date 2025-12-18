
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.scss";
import profilePicture from "../../assets/images/profilePicture.png"

export default function UserProfile() {
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
      <div className={styles.profile_container}>
        Пользователь не авторизован
      </div>
    );
  }

  return (
    <div className={styles.profile_container}>
      <div className={styles.header}>
        <h1>Профиль пользователя</h1>
        <button
          className={styles.edit_button}
          onClick={() => navigate("/mainPage")}
        >
          Back
        </button>
      </div>

      <div className={styles.profile_card}>
        <img
          src={user.img ? user.img : profilePicture}
          alt="avatar"
          className={styles.profile_avatar}
        />

        <div className={styles.profile_info}>
          <h2>{user.name}</h2>
          <p>Возраст: {user.age}</p>
          <p>ID: {user.id}</p>
        </div>
      </div>
    </div>
  );
}
