import React from 'react';
import styles from "./SecondWeek.module.scss";

export default function SecondWeek() {
  return (
    <div className={styles.secondWeek_container}>
      <h1 className={styles.week_title}>Неделя 2: Основы CSS</h1>

      <section className={styles.lesson}>
        <h2>Что такое CSS?</h2>
        <p>
          CSS (Cascading Style Sheets) — это язык стилей, который используется для оформления веб-страниц. 
          С его помощью можно задавать цвета, шрифты, отступы, расположение элементов и многое другое.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Селекторы</h2>
        <p>С помощью селекторов мы выбираем элементы на странице, чтобы применить к ним стили.</p>
        <pre>
          <code>{`/* По тегу */
p {
  color: blue;
}

/* По классу */
.my-class {
  font-size: 18px;
}

/* По id */
#my-id {
  background-color: yellow;
}`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Свойства CSS</h2>
        <p>Примеры основных свойств CSS:</p>
        <ul>
          <li><code>color</code> — цвет текста</li>
          <li><code>background-color</code> — цвет фона</li>
          <li><code>font-size</code> — размер шрифта</li>
          <li><code>margin</code> — внешние отступы</li>
          <li><code>padding</code> — внутренние отступы</li>
          <li><code>border</code> — рамка вокруг элемента</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Подключение CSS к HTML</h2>
        <p>CSS можно подключать разными способами:</p>
        <pre>
          <code>{`<!-- Встроенный стиль -->
<p style="color: red;">Привет</p>

<!-- Внутренний стиль -->
<style>
  p { color: blue; }
</style>

<!-- Внешний файл style.css -->
<link rel="stylesheet" href="style.css">`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Практическое задание</h2>
        <p>
          Попробуй создать HTML-страницу из первой недели и добавить к ней CSS:
        </p>
        <ul>
          <li>Сделай заголовок другого цвета</li>
          <li>Добавь фон к абзацам</li>
          <li>Попробуй задать отступы и рамки</li>
        </ul>
      </section>
    </div>
  );
}
