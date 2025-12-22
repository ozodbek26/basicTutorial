import React from "react";
import styles from "./FirstWeek.module.scss";

export default function FirstWeek() {
  return (
    <div className={styles.firstWeek_container}>
      <h1 className={styles.week_title}>Неделя 1: Основы HTML</h1>

      <section className={styles.lesson}>
        <h2>Введение</h2>
        <p>
          На первой неделе мы знакомимся с HTML — основой любого веб-сайта.
          Независимо от того, используешь ли ты React, Vue или чистый JavaScript,
          HTML всегда лежит в основе интерфейса.
        </p>
        <p>
          Цель этой недели — понять, как браузер читает HTML-документ и как из
          текста формируется визуальная страница.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Что такое HTML?</h2>
        <p>
          HTML (HyperText Markup Language) — это язык разметки, предназначенный
          для создания структуры веб-страниц.
        </p>
        <p>
          Он не является языком программирования. HTML не содержит логики,
          условий или циклов. Его задача — описывать содержимое.
        </p>
        <p>
          С помощью HTML мы говорим браузеру:
        </p>
        <ul>
          <li>где заголовок</li>
          <li>где текст</li>
          <li>где изображение</li>
          <li>где ссылка</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Как браузер читает HTML</h2>
        <p>
          Браузер читает HTML сверху вниз. Каждый тег интерпретируется и
          превращается в элемент страницы.
        </p>
        <p>
          Ошибки в HTML обычно не ломают страницу полностью, но могут приводить
          к неправильному отображению.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Что такое теги</h2>
        <p>
          Тег — это основная единица HTML. Он заключается в угловые скобки.
        </p>
        <p>Примеры тегов:</p>
        <ul>
          <li><code>&lt;h1&gt;</code> — заголовок</li>
          <li><code>&lt;p&gt;</code> — абзац</li>
          <li><code>&lt;img&gt;</code> — изображение</li>
          <li><code>&lt;a&gt;</code> — ссылка</li>
        </ul>
        <p>
          Большинство тегов имеют открывающую и закрывающую часть.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Парные и одиночные теги</h2>
        <p>Парные теги:</p>
        <pre>
{`<p>Текст</p>
<h1>Заголовок</h1>`}
        </pre>

        <p>Одиночные теги:</p>
        <pre>
{`<img src="image.png" alt="Описание">
<br>
<hr>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Атрибуты</h2>
        <p>
          Атрибуты добавляют тегам дополнительную информацию.
        </p>
        <ul>
          <li><code>href</code> — адрес ссылки</li>
          <li><code>src</code> — путь к файлу</li>
          <li><code>alt</code> — альтернативный текст</li>
        </ul>
        <pre>
{`<a href="https://google.com">Google</a>
<img src="photo.jpg" alt="Фото">`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Структура HTML-документа</h2>
        <p>
          Каждый HTML-документ имеет обязательную структуру.
        </p>
        <pre>
{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Моя страница</title>
  </head>
  <body>
    <h1>Привет!</h1>
    <p>Это HTML документ</p>
  </body>
</html>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Заголовки</h2>
        <p>
          HTML предоставляет шесть уровней заголовков — от h1 до h6.
        </p>
        <ul>
          <li><code>&lt;h1&gt;</code> — главный заголовок</li>
          <li><code>&lt;h2&gt;</code> — подзаголовок</li>
          <li><code>&lt;h6&gt;</code> — наименьший</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Абзацы и переносы</h2>
        <p>
          Тег <code>&lt;p&gt;</code> используется для текста.
        </p>
        <p>
          Тег <code>&lt;br&gt;</code> делает перенос строки.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Списки</h2>
        <p>Маркированный список:</p>
        <pre>
{`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}
        </pre>

        <p>Нумерованный список:</p>
        <pre>
{`<ol>
  <li>Установить редактор</li>
  <li>Создать файл</li>
  <li>Написать код</li>
</ol>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Практическое задание</h2>
        <p>Создай HTML-файл, который содержит:</p>
        <ul>
          <li>Заголовок h1</li>
          <li>Минимум 3 абзаца</li>
          <li>Список из 5 элементов</li>
          <li>Ссылку на любой сайт</li>
          <li>Изображение</li>
        </ul>
        <p>
          Попробуй открыть файл в браузере и посмотреть результат.
        </p>
      </section>



            <section className={styles.lesson}>
        <h2>Комментарии в HTML</h2>
        <p>
          Комментарии используются для пояснений в коде и не отображаются
          браузером.
        </p>
        <pre>
{`<!-- Это комментарий -->
<p>Текст</p>`}
        </pre>
        <p>
          Комментарии полезны для заметок и временного отключения кода.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Семантика HTML</h2>
        <p>
          Семантические теги помогают браузеру и поисковым системам лучше
          понимать структуру страницы.
        </p>
        <ul>
          <li><code>&lt;header&gt;</code> — шапка сайта</li>
          <li><code>&lt;main&gt;</code> — основное содержимое</li>
          <li><code>&lt;section&gt;</code> — логический блок</li>
          <li><code>&lt;footer&gt;</code> — подвал</li>
        </ul>
        <pre>
{`<header>Шапка</header>
<main>Контент</main>
<footer>Подвал</footer>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Блочные и строчные элементы</h2>
        <p>
          HTML-элементы делятся на блочные и строчные.
        </p>
        <p>
          Блочные элементы занимают всю ширину строки.
        </p>
        <ul>
          <li><code>&lt;div&gt;</code></li>
          <li><code>&lt;p&gt;</code></li>
          <li><code>&lt;section&gt;</code></li>
        </ul>
        <p>
          Строчные элементы занимают только необходимое пространство.
        </p>
        <ul>
          <li><code>&lt;span&gt;</code></li>
          <li><code>&lt;a&gt;</code></li>
          <li><code>&lt;strong&gt;</code></li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Тег div</h2>
        <p>
          <code>&lt;div&gt;</code> — универсальный контейнер без семантики.
        </p>
        <p>
          Используется для группировки элементов и стилизации через CSS.
        </p>
        <pre>
{`<div class="container">
  <p>Текст</p>
</div>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Тег span</h2>
        <p>
          <code>&lt;span&gt;</code> — строчный контейнер.
        </p>
        <p>
          Используется для выделения части текста.
        </p>
        <pre>
{`<p>Это <span>важный</span> текст</p>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Форматирование текста</h2>
        <ul>
          <li><code>&lt;strong&gt;</code> — важный текст</li>
          <li><code>&lt;em&gt;</code> — акцент</li>
          <li><code>&lt;u&gt;</code> — подчёркивание</li>
          <li><code>&lt;mark&gt;</code> — выделение</li>
        </ul>
        <pre>
{`<strong>Важно</strong>
<em>Акцент</em>
<mark>Выделено</mark>`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Изображения</h2>
        <p>
          Изображения добавляются с помощью тега <code>&lt;img&gt;</code>.
        </p>
        <p>
          Атрибут <code>alt</code> обязателен и важен для доступности.
        </p>
        <pre>
{`<img src="cat.jpg" alt="Кот">`}
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Ссылки</h2>
        <p>
          Ссылки позволяют переходить между страницами.
        </p>
        <pre>
{`<a href="https://example.com">Перейти</a>`}
        </pre>
        <p>
          Атрибут <code>target="_blank"</code> открывает ссылку в новой вкладке.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Ошибки новичков</h2>
        <ul>
          <li>Отсутствие закрывающих тегов</li>
          <li>Неправильная вложенность</li>
          <li>Отсутствие alt у изображений</li>
          <li>Использование div вместо семантики</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Рекомендации</h2>
        <p>
          Пиши HTML аккуратно и структурировано.
        </p>
        <p>
          Используй отступы и форматирование.
        </p>
        <p>
          Проверяй код в браузере.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Итог недели</h2>
        <p>
          За первую неделю ты узнал, что такое HTML, теги, атрибуты и структура
          документа.
        </p>
        <p>
          Эти знания — фундамент для изучения CSS и JavaScript.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Домашнее задание</h2>
        <p>
          Создай HTML-страницу о себе.
        </p>
        <ul>
          <li>Заголовок с именем</li>
          <li>Описание</li>
          <li>Список навыков</li>
          <li>Ссылка</li>
          <li>Изображение</li>
        </ul>
      </section>

    </div>
  );
}
