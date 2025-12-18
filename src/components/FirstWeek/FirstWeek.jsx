import React from "react";
import styles from "./FirstWeek.module.scss";

export default function FirstWeek() {
  return (
    <div className={styles.firstWeek_container}>
      <h1 className={styles.week_title}>Неделя 1: Основы HTML</h1>

      <section className={styles.lesson}>
        <h2>Что такое HTML?</h2>
        <p>
          HTML (HyperText Markup Language) — это язык разметки, который
          используется для создания структуры веб-страниц. С помощью HTML вы
          описываете, какие элементы будут на странице: заголовки, абзацы,
          изображения, ссылки и многое другое.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Что такое теги?</h2>
        <p>
          Теги — это специальные элементы HTML, которые обозначают структуру и
          смысл содержимого. Например:
          <code>&lt;h1&gt;Заголовок&lt;/h1&gt;</code>,
          <code>&lt;p&gt;Абзац текста&lt;/p&gt;</code>.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Атрибуты тегов</h2>
        <p>Атрибуты задают дополнительные свойства тегов. Например:</p>
        <ul>
          <li>
            <code>&lt;a href="https://example.com"&gt;Ссылка&lt;/a&gt;</code> —
            атрибут href указывает адрес ссылки.
          </li>
          <li>
            <code>&lt;img src="image.png" alt="Описание"&gt;</code> — атрибут
            src задаёт путь к изображению, alt — альтернативный текст.
          </li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Структура HTML-документа</h2>
        <p>Минимальная структура HTML-документа выглядит так:</p>
        <pre>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>Моя страница</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
    <p>Это мой первый сайт на HTML.</p>
  </body>
</html>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Практическое задание</h2>
        <p>Попробуй создать HTML-страницу с:</p>
        <ul>
          <li>Заголовком &lt;h1&gt;</li>
          <li>Несколькими абзацами &lt;p&gt;</li>
          <li>Ссылкой &lt;a&gt; на любимый сайт</li>
          <li>Изображением &lt;img&gt;</li>
        </ul>
      </section>
    </div>
  );
}
