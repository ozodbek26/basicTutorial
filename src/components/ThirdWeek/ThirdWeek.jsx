import React from "react";
import styles from "./ThirdWeek.module.scss";

export default function ThirdWeek() {
  return (
    <div className={styles.thirdWeek_container}>
      <h1 className={styles.week_title}>Неделя 3: Основы JavaScript</h1>

      <section className={styles.lesson}>
        <h2>Что такое JavaScript?</h2>
        <p>
          JavaScript — это язык программирования, который позволяет делать
          веб-страницы интерактивными. С его помощью можно изменять содержимое
          страницы, реагировать на действия пользователя, работать с формами,
          анимациями и данными.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Переменные</h2>
        <p>Переменные используются для хранения данных:</p>
        <pre>
          <code>{`// Создание переменных
let name = "Иван"; // можно менять
const age = 18; // постоянная
var city = "Бишкек"; // устаревший вариант`}</code>
        </pre>
        <p>
          Используй <strong>let</strong> для изменяемых значений,
          <strong>const</strong> для постоянных, а <strong>var</strong> лучше
          избегать.
        </p>
      </section>

      <section className={styles.lesson}>
        <h2>Типы данных</h2>
        <ul>
          <li>String — текст: "Привет"</li>
          <li>Number — число: 10, 3.14</li>
          <li>Boolean — логический: true или false</li>
          <li>Array — массив: [1, 2, 3]</li>
          <li>Object — объект: {`{name: "Ivan", age: 18}`}</li>
          <li>null — пустое значение</li>
          <li>undefined — значение не определено</li>
        </ul>
      </section>

      <section className={styles.lesson}>
        <h2>Операторы</h2>
        <p>Примеры операторов:</p>
        <pre>
          <code>{`let x = 5;
let y = 2;

// Арифметические
x + y // 7
x - y // 3
x * y // 10
x / y // 2.5
x % y // 1

// Сравнения
x > y // true
x < y // false
x === 5 // true

// Логические
true && false // false
true || false // true
!true // false`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Функции</h2>
        <p>Функции позволяют объединять код и выполнять действия повторно:</p>
        <pre>
          <code>{`// Обычная функция
function greet(name) {
  console.log("Привет, " + name);
}
greet("Иван");

// Стрелочная функция
const sum = (a, b) => a + b;
console.log(sum(3, 5)); // 8`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Условные конструкции</h2>
        <p>Проверка условий и ветвление:</p>
        <pre>
          <code>{`let age = 18;

if (age >= 18) {
  console.log("Взрослый");
} else {
  console.log("Молодой");
}

// switch
let day = 2;
switch(day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  default:
    console.log("Другой день");
}`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Циклы</h2>
        <p>Используем для повторений:</p>
        <pre>
          <code>{`// for
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let i = 0;
while(i < 5) {
  console.log(i);
  i++;
}

// for...of (массив)
let arr = [1,2,3];
for(let num of arr) {
  console.log(num);
}

// for...in (объект)
let obj = {a:1, b:2};
for(let key in obj) {
  console.log(key, obj[key]);
}`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Массивы</h2>
        <p>Примеры работы с массивами:</p>
        <pre>
          <code>{`let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); // добавить элемент
fruits.pop(); // удалить последний
console.log(fruits.length); // 3
fruits.map(fruit => console.log(fruit)); // перебор`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Объекты</h2>
        <p>Объекты позволяют хранить связанные данные:</p>
        <pre>
          <code>{`let person = {
  name: "Ivan",
  age: 18,
  city: "Bishkek"
};

console.log(person.name); // Ivan
person.age = 19; // изменить`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Строки и числа</h2>
        <pre>
          <code>{`let text = "Hello, World!";
console.log(text.length); // 13
console.log(text.toUpperCase()); // "HELLO, WORLD!"

let num = 10;
console.log(num + 5); // 15
console.log(num * 2); // 20`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Взаимодействие с HTML (DOM)</h2>
        <p>JavaScript может изменять содержимое HTML:</p>
        <pre>
          <code>{`// Получить элемент по id
let title = document.getElementById("title");
title.textContent = "Привет, мир!";

// Добавить событие на кнопку
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Кнопка нажата!");
});`}</code>
        </pre>
      </section>

      <section className={styles.lesson}>
        <h2>Практическое задание</h2>
        <ul>
          <li>Создай переменные для имени, возраста, города</li>
          <li>Выведи их в консоль</li>
          <li>
            Создай функцию приветствия, которая принимает имя и выводит
            сообщение
          </li>
          <li>
            Сделай проверку возраста и выведи сообщение о взрослом или молодом
          </li>
          <li>Создай массив любимых фруктов и выведи их с помощью цикла</li>
          <li>Создай объект с данными о себе и выведи свойства</li>
          <li>Добавь кнопку на страницу и при клике выводи alert</li>
        </ul>
      </section>
    </div>
  );
}
