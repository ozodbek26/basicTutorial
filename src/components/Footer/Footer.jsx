import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.logo}>{t("footer.courseTitle")}</h3>
          <p>{t("footer.description")}</p>
          <p>{t("footer.copyright")}</p>
        </div>

        <div className={styles.column}>
          <h4>{t("footer.sectionsTitle")}</h4>
          <ul>
            <li>
              <Link to="/mainPage">{t("footer.home")}</Link>
            </li>
            <li>
              <Link to="/userProfile">{t("footer.profile")}</Link>
            </li>
            <li>
              <Link to="/createAccount">{t("footer.createAccount")}</Link>
            </li>
            <li>
              <Link to="/mainPage">{t("footer.contacts")}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>{t("footer.contactTitle")}</h4>
          <p>Email: ozodbek200017@gmail.com</p>

          <div className={styles.social}>
            <a
              href="https://t.me/ozodbek26"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.telegram")}
            </a>
            <a
              href="https://github.com/ozodbek26"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/@ozodbek26" 
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}