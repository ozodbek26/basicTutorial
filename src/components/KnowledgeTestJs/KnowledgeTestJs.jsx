import React, { useEffect, useState } from "react";
import styles from "./KnowledgeTestJs.module.scss";

export default function KnowledgeTestJs({ setAnswers3 }) {
  const [f1, setF1] = useState(null);
  const [f2, setF2] = useState(null);
  const [f3, setF3] = useState(null);
  const [f4, setF4] = useState(null);
  const [f5, setF5] = useState(null);
  const [f6, setF6] = useState(null);
  const [f7, setF7] = useState(null);
  const [f8, setF8] = useState(null);
  const [f9, setF9] = useState(null);
  const [f10, setF10] = useState(null);
  const [f11, setF11] = useState(null);
  const [f12, setF12] = useState(null);
  const [f13, setF13] = useState(null);
  const [f14, setF14] = useState(null);
  const [f15, setF15] = useState(null);
  const [f16, setF16] = useState(null);
  const [f17, setF17] = useState(null);
  const [f18, setF18] = useState(null);
  const [f19, setF19] = useState(null);
  const [f20, setF20] = useState(null);

  const submitAnswers = () => {
    const answers = [
      f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
      f11, f12, f13, f14, f15, f16, f17, f18, f19, f20
    ];
    setAnswers3(answers);
  };

  useEffect(() =>{
     const answers = [
      f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
      f11, f12, f13, f14, f15, f16, f17, f18, f19, f20
    ];
    setAnswers3(answers);

  }, [] )

  return (
    <div className={styles.KnowledgeTestJs}>
       <button onClick={submitAnswers} className={styles.submitButton}>
          отправить 
        </button>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <p className={styles.question}>1. Как объявить переменную в JavaScript?</p>
          <div className={styles.options}>
            <button onClick={() => setF1(false)} className={styles.optionButton}>var</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>let</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>const</button>
            <button onClick={() => setF1(true)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>2. Какой оператор сравнения учитывает тип данных?</p>
          <div className={styles.options}>
            <button onClick={() => setF2(false)} className={styles.optionButton}>==</button>
            <button onClick={() => setF2(true)} className={styles.optionButton}>===</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>!=</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>!==</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>3. Как создать функцию?</p>
          <div className={styles.options}>
            <button onClick={() => setF3(false)} className={styles.optionButton}>function myFunc() {}</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>const myFunc = () {"=>"} {}</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>let myFunc = function() {}</button>
            <button onClick={() => setF3(true)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>4. Какой метод добавляет элемент в конец массива?</p>
          <div className={styles.options}>
            <button onClick={() => setF4(false)} className={styles.optionButton}>pop()</button>
            <button onClick={() => setF4(true)} className={styles.optionButton}>push()</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>shift()</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>unshift()</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>5. Как удалить последний элемент массива?</p>
          <div className={styles.options}>
            <button onClick={() => setF5(false)} className={styles.optionButton}>push()</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>shift()</button>
            <button onClick={() => setF5(true)} className={styles.optionButton}>pop()</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>unshift()</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>6. Как проверить тип переменной?</p>
          <div className={styles.options}>
            <button onClick={() => setF6(false)} className={styles.optionButton}>instanceof</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>type</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>isType</button>
            <button onClick={() => setF6(true)} className={styles.optionButton}>typeof</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>7. Как сделать условие в JavaScript?</p>
          <div className={styles.options}>
            <button onClick={() => setF7(false)} className={styles.optionButton}>switch</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>ternary ? :</button>
            <button onClick={() => setF7(true)} className={styles.optionButton}>if ... else</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>8. Как перебрать массив?</p>
          <div className={styles.options}>
            <button onClick={() => setF8(false)} className={styles.optionButton}>map</button>
            <button onClick={() => setF8(true)} className={styles.optionButton}>forEach</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>for</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>9. Как получить случайное число от 0 до 1?</p>
          <div className={styles.options}>
            <button onClick={() => setF9(false)} className={styles.optionButton}>Math.floor()</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>Math.ceil()</button>
            <button onClick={() => setF9(true)} className={styles.optionButton}>Math.random()</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>Math.round()</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>10. Как округлить число вниз?</p>
          <div className={styles.options}>
            <button onClick={() => setF10(false)} className={styles.optionButton}>Math.ceil()</button>
            <button onClick={() => setF10(true)} className={styles.optionButton}>Math.floor()</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>Math.round()</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>parseInt()</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>11. Как соединить строки?</p>
          <div className={styles.options}>
            <button onClick={() => setF11(false)} className={styles.optionButton}>join()</button>
            <button onClick={() => setF11(true)} className={styles.optionButton}>concat()</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>+</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>12. Как проверить, есть ли элемент в массиве?</p>
          <div className={styles.options}>
            <button onClick={() => setF12(false)} className={styles.optionButton}>indexOf()</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>find()</button>
            <button onClick={() => setF12(true)} className={styles.optionButton}>includes()</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>13. Как объявить объект?</p>
          <div className={styles.options}>
            <button onClick={() => setF13(false)} className={styles.optionButton}>var obj = {}</button>
            <button onClick={() => setF13(true)} className={styles.optionButton}>const obj = {}</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>let obj = {}</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>14. Как получить длину массива?</p>
          <div className={styles.options}>
            <button onClick={() => setF14(false)} className={styles.optionButton}>array.size</button>
            <button onClick={() => setF14(false)} className={styles.optionButton}>array.count</button>
            <button onClick={() => setF14(true)} className={styles.optionButton}>array.length</button>
            <button onClick={() => setF14(false)} className={styles.optionButton}>array.total</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>15. Как остановить выполнение цикла?</p>
          <div className={styles.options}>
            <button onClick={() => setF15(false)} className={styles.optionButton}>continue</button>
            <button onClick={() => setF15(true)} className={styles.optionButton}>break</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>stop</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>return</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>16. Как проверить условие одновременно на два значения?</p>
          <div className={styles.options}>
            <button onClick={() => setF16(false)} className={styles.optionButton}>||</button>
            <button onClick={() => setF16(false)} className={styles.optionButton}>!</button>
            <button onClick={() => setF16(true)} className={styles.optionButton}>&&</button>
            <button onClick={() => setF16(false)} className={styles.optionButton}>?</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>17. Как объявить асинхронную функцию?</p>
          <div className={styles.options}>
            <button onClick={() => setF17(false)} className={styles.optionButton}>function async myFunc() {}</button>
            <button onClick={() => setF17(true)} className={styles.optionButton}>async function myFunc() {}</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>await function myFunc() {}</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>18. Как вызвать промис?</p>
          <div className={styles.options}>
            <button onClick={() => setF18(false)} className={styles.optionButton}>promise.catch()</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>await promise</button>
            <button onClick={() => setF18(true)} className={styles.optionButton}>promise.then()</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>19. Как преобразовать строку в число?</p>
          <div className={styles.options}>
            <button onClick={() => setF19(false)} className={styles.optionButton}>parseInt("123")</button>
            <button onClick={() => setF19(true)} className={styles.optionButton}>Number("123")</button>
            <button onClick={() => setF19(false)} className={styles.optionButton}>+("123")</button>
            <button onClick={() => setF19(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>20. Как объединить два массива?</p>
          <div className={styles.options}>
            <button onClick={() => setF20(false)} className={styles.optionButton}>push()</button>
            <button onClick={() => setF20(true)} className={styles.optionButton}>spread ...</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>concat()</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>Все варианты верны</button>
          </div>
        </div>

       
      </div>
    </div>
  );
}