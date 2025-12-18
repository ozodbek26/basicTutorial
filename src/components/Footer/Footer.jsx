import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        {/* Левый блок — название курса + описание */}
        <div className={styles.column}>
          <h3 className={styles.logo}>Курс за 6 недели</h3>
          <p>Быстро и просто научитесь ВСЕМУ , что нужно в 2025 году</p>
          <p> 2025 Все права защищены. но это не точно{")"}</p>
        </div>

        {/* Средний блок — полезные ссылки */}
        <div className={styles.column}>
          <h4>Разделы</h4>
          <ul>
            <li>
              <Link to="/mainPage">Главная</Link>
            </li>
            <li>
              <Link to="/profile">Мой профиль</Link>
            </li>
            <li>
              <Link to="/createAccount">Создать аккаунт</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>

        {/* Правый блок — контакты + соцсети */}
        <div className={styles.column}>
          <h4>Связаться с нами</h4>
          <p>Email: ozodbek200017@gmail.com</p>

          <div className={styles.social}>
            <a
              href="https://github.com/ozodbek26"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://github.com/ozodbek26"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://github.com/ozodbek26"
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
