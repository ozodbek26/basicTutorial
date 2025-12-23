import React from "react";
import styles from "./KnowledgeTestJs.module.scss";

export default function KnowledgeTestJs() {
  return (
    <div className={styles.KnowledgeTestJs}>
      <div className={styles.tasks}>
        {/* Вопрос 1 */}
        <div className={styles.task}>
          <p className={styles.question}>
            1. Как объявить переменную в JavaScript?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>var</button>
            <button className={styles.optionButton}>let</button>
            <button className={styles.optionButton}>const</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 2 */}
        <div className={styles.task}>
          <p className={styles.question}>
            2. Какой оператор сравнения учитывает тип данных?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>==</button>
            <button className={styles.optionButton}>===</button>
            <button className={styles.optionButton}>!=</button>
            <button className={styles.optionButton}>!==</button>
          </div>
        </div>

        {/* Вопрос 3 */}
        <div className={styles.task}>
          <p className={styles.question}>3. Как создать функцию?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>
              function myFunc() {}
            </button>
            <button className={styles.optionButton}>
              const myFunc = (){" =>"} {}
            </button>
            <button className={styles.optionButton}>
              let myFunc = function() {}
            </button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 4 */}
        <div className={styles.task}>
          <p className={styles.question}>
            4. Какой метод добавляет элемент в конец массива?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>push()</button>
            <button className={styles.optionButton}>pop()</button>
            <button className={styles.optionButton}>shift()</button>
            <button className={styles.optionButton}>unshift()</button>
          </div>
        </div>

        {/* Вопрос 5 */}
        <div className={styles.task}>
          <p className={styles.question}>
            5. Как удалить последний элемент массива?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>pop()</button>
            <button className={styles.optionButton}>push()</button>
            <button className={styles.optionButton}>shift()</button>
            <button className={styles.optionButton}>unshift()</button>
          </div>
        </div>

        {/* Вопрос 6 */}
        <div className={styles.task}>
          <p className={styles.question}>6. Как проверить тип переменной?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>typeof</button>
            <button className={styles.optionButton}>instanceof</button>
            <button className={styles.optionButton}>type</button>
            <button className={styles.optionButton}>isType</button>
          </div>
        </div>

        {/* Вопрос 7 */}
        <div className={styles.task}>
          <p className={styles.question}>
            7. Как сделать условие в JavaScript?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>if ... else</button>
            <button className={styles.optionButton}>switch</button>
            <button className={styles.optionButton}>ternary ? :</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 8 */}
        <div className={styles.task}>
          <p className={styles.question}>8. Как перебрать массив?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>for</button>
            <button className={styles.optionButton}>forEach</button>
            <button className={styles.optionButton}>map</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 9 */}
        <div className={styles.task}>
          <p className={styles.question}>
            9. Как получить случайное число от 0 до 1?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>Math.random()</button>
            <button className={styles.optionButton}>Math.floor()</button>
            <button className={styles.optionButton}>Math.ceil()</button>
            <button className={styles.optionButton}>Math.round()</button>
          </div>
        </div>

        {/* Вопрос 10 */}
        <div className={styles.task}>
          <p className={styles.question}>10. Как округлить число вниз?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>Math.floor()</button>
            <button className={styles.optionButton}>Math.ceil()</button>
            <button className={styles.optionButton}>Math.round()</button>
            <button className={styles.optionButton}>parseInt()</button>
          </div>
        </div>

        {/* Вопрос 11 */}
        <div className={styles.task}>
          <p className={styles.question}>11. Как соединить строки?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>+</button>
            <button className={styles.optionButton}>concat()</button>
            <button className={styles.optionButton}>Все варианты верны</button>
            <button className={styles.optionButton}>join()</button>
          </div>
        </div>

        {/* Вопрос 12 */}
        <div className={styles.task}>
          <p className={styles.question}>
            12. Как проверить, есть ли элемент в массиве?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>includes()</button>
            <button className={styles.optionButton}>indexOf()</button>
            <button className={styles.optionButton}>find()</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 13 */}
        <div className={styles.task}>
          <p className={styles.question}>13. Как объявить объект?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>let obj = {}</button>
            <button className={styles.optionButton}>const obj = {}</button>
            <button className={styles.optionButton}>var obj = {}</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 14 */}
        <div className={styles.task}>
          <p className={styles.question}>14. Как получить длину массива?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>array.length</button>
            <button className={styles.optionButton}>array.size</button>
            <button className={styles.optionButton}>array.count</button>
            <button className={styles.optionButton}>array.total</button>
          </div>
        </div>

        {/* Вопрос 15 */}
        <div className={styles.task}>
          <p className={styles.question}>
            15. Как остановить выполнение цикла?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>break</button>
            <button className={styles.optionButton}>continue</button>
            <button className={styles.optionButton}>stop</button>
            <button className={styles.optionButton}>return</button>
          </div>
        </div>

        {/* Вопрос 16 */}
        <div className={styles.task}>
          <p className={styles.question}>
            16. Как проверить условие одновременно на два значения?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&&</button>
            <button className={styles.optionButton}>||</button>
            <button className={styles.optionButton}>!</button>
            <button className={styles.optionButton}>?</button>
          </div>
        </div>

        {/* Вопрос 17 */}
        <div className={styles.task}>
          <p className={styles.question}>
            17. Как объявить асинхронную функцию?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>
              async function myFunc() {}
            </button>
            <button className={styles.optionButton}>
              function async myFunc() {}
            </button>
            <button className={styles.optionButton}>
              await function myFunc() {}
            </button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 18 */}
        <div className={styles.task}>
          <p className={styles.question}>18. Как вызвать промис?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>promise.then()</button>
            <button className={styles.optionButton}>await promise</button>
            <button className={styles.optionButton}>promise.catch()</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 19 */}
        <div className={styles.task}>
          <p className={styles.question}>
            19. Как преобразовать строку в число?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>Number("123")</button>
            <button className={styles.optionButton}>parseInt("123")</button>
            <button className={styles.optionButton}>+("123")</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        {/* Вопрос 20 */}
        <div className={styles.task}>
          <p className={styles.question}>20. Как объединить два массива?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>concat()</button>
            <button className={styles.optionButton}>push()</button>
            <button className={styles.optionButton}>spread ...</button>
            <button className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>
      </div>
    </div>
  );
}
