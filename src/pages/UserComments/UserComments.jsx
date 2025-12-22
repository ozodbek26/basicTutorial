import React, { useEffect, useState } from "react";
import styles from "./UserComments.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import profilePicture from "../../assets/images/profilePicture.png";

import { useTranslation } from "react-i18next";

export default function UserComments() {
  const { t } = useTranslation();

  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  function handlePost() {
    if (!inputComment.trim()) {
      alert(t("comments.alertEmpty"));
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert(t("comments.alertNotLoggedIn"));
      return;
    }

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: currentUser.name,
        comment: inputComment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments((prev) => [...prev, data.comment]);
        setInputComment("");
      })
      .catch((err) => {
        console.error(err);
        alert(t("comments.alertError"));
      });
  }

  return (
    <div className={styles.UserComments}>
      <Header />

      <div className={styles.UserComments_Comments1}>
        <input
          placeholder={t("comments.placeholder")}
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
        />
        <button onClick={handlePost}>{t("comments.postButton")}</button>
      </div>

      <div className={styles.UserComments_Comments2}>
        <h2 className={styles.comments_title}>{t("comments.title")}</h2>

        {comments.length === 0 ? (
          <p className={styles.no_comments}>{t("comments.noComments")}</p>
        ) : (
          comments.map((item) => (
            <div
              key={item.id}
              className={styles.UserComments_Comments2_blocks}
            >
              <div className={styles.block_name}>
                <div className={styles.block_img}>
                  <img
                    className={styles.img}
                    src={profilePicture}
                    alt="avatar"
                  />
                </div>
                <p>{item.name}</p>
              </div>

              <p>{item.comments}</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}