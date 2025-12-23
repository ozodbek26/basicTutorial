import React from "react";
import styles from "./SecondWeek.module.scss";

export default function SecondWeek() {
  return (
    <div className={styles.secondWeek_container}>
      <h1 className={styles.week_title}>Неделя 2: Основы CSS</h1>

      <section className={styles.lesson}>
        <h2>Введение</h2>
        <p>
          На второй неделе мы изучаем CSS — язык, который отвечает за внешний
          вид веб-страниц. Если HTML задаёт структуру, то CSS делает сайт
          красивым и удобным.
        </p>
        <p>Без CSS сайты выглядели бы как обычный текст без оформления.</p>
      </section>

      <section className={styles.lesson}>
        <h2>Что такое CSS?</h2>
        <p>CSS (Cascading Style Sheets) — это каскадные таблицы стилей.</p>
        <p>CSS позволяет управлять:</p>
        <ul>
          <li>цветами</li>
          <li>шрифтами</li>
          <li>размерами</li>
          <li>расположением элементов</li>
          <li>адаптацией под разные экраны</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Как работает CSS</h2>
        <p>Браузер читает HTML, а затем применяет к элементам CSS-правила.</p>
        <p>Каждое правило состоит из селектора и набора свойств.</p>
        <pre>
          {`p {
  color: red;
  font-size: 16px;
}`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Селекторы</h2>
        <p>Селекторы определяют, к каким элементам применяется стиль.</p>
        <pre>
          {`/* По тегу */
p {
  color: blue;
}

/* По классу */
.box {
  padding: 20px;
}

/* По id */
#main {
  background-color: gray;
}`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Комбинированные селекторы</h2>
        <p>CSS позволяет комбинировать селекторы.</p>
        <pre>
          {`div p {
  color: green;
}

.button.primary {
  background: blue;
}`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Специфичность</h2>
        <p>
          Если к элементу применяется несколько стилей, браузер выбирает самый
          специфичный.
        </p>
        <ul>
          <li>inline-стили</li>
          <li>ID</li>
          <li>классы</li>
          <li>теги</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Основные CSS-свойства</h2>
        <ul>
          <li>
            <code>color</code> — цвет текста
          </li>
          <li>
            <code>background-color</code> — цвет фона
          </li>
          <li>
            <code>font-size</code> — размер текста
          </li>
          <li>
            <code>font-family</code> — шрифт
          </li>
          <li>
            <code>width</code> — ширина
          </li>
          <li>
            <code>height</code> — высота
          </li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Блочная модель (Box Model)</h2>
        <p>Каждый элемент в CSS представляет собой прямоугольник.</p>
        <ul>
          <li>content</li>
          <li>padding</li>
          <li>border</li>
          <li>margin</li>
        </ul>
        <pre>
          {`div {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Margin и Padding</h2>
        <p>Margin отвечает за внешние отступы, padding — за внутренние.</p>
        <pre>
          {`padding: 10px 20px;
margin: 0 auto;`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Border</h2>
        <p>Border задаёт рамку элемента.</p>
        <pre>{`border: 2px solid red;`}</pre>
      </section>

      <section className={styles.lesson}>
        <h2>Цвета в CSS</h2>
        <ul>
          <li>названия цветов</li>
          <li>hex</li>
          <li>rgb / rgba</li>
        </ul>
        <pre>
          {`color: red;
color: #ff0000;
color: rgb(255, 0, 0);`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Шрифты</h2>
        <p>CSS позволяет управлять шрифтами.</p>
        <pre>
          {`font-family: Arial, sans-serif;
font-size: 18px;
font-weight: bold;`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Display</h2>
        <p>Свойство display определяет тип отображения элемента.</p>
        <ul>
          <li>block</li>
          <li>inline</li>
          <li>inline-block</li>
          <li>none</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Position</h2>
        <p>Position управляет позиционированием элементов.</p>
        <ul>
          <li>static</li>
          <li>relative</li>
          <li>absolute</li>
          <li>fixed</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Flexbox</h2>
        <p>Flexbox используется для построения гибких макетов.</p>
        <pre>
          {`display: flex;
justify-content: center;
align-items: center;`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Ошибки новичков</h2>
        <ul>
          <li>Отсутствие reset стилей</li>
          <li>Слишком много inline-стилей</li>
          <li>Использование !important</li>
          <li>Отсутствие структуры</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Практическое задание</h2>
        <p>Возьми HTML-страницу из первой недели и оформи её с помощью CSS.</p>
        <ul>
          <li>Измени цвета</li>
          <li>Добавь отступы</li>
          <li>Сделай рамки</li>
          <li>Используй Flexbox</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Итог недели</h2>
        <p>
          На этой неделе ты освоил основы CSS и понял, как оформлять
          веб-страницы.
        </p>
        <p>На следующей неделе мы начнём изучать JavaScript.</p>
      </section>
    </div>
  );
}
