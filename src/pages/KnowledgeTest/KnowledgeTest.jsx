import React, { useState } from "react";
import styles from "./KnowledgeTest.module.scss";
import KnowledgeTestHtml from "../../components/KnowledgeTestHtml/KnowledgeTestHtml";
import KnowledgeTestCss from "../../components/KnowledgeTestCss/KnowledgeTestCss";
import KnowledgeTestJs from "../../components/KnowledgeTestJs/KnowledgeTestJs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function KnowledgeTest() {
  const [activeWeek, setActiveWeek] = useState(1);

  const [answers1, setAnswers1] = useState([]);
  const [answers2, setAnswers2] = useState([]);
  const [answers3, setAnswers3] = useState([]);

  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
    empty: 0,
    total: 0,
  });

  function name() {
    const allAnswers = [...answers1, ...answers2, ...answers3];

    const correct = allAnswers.filter((a) => a === true).length;
    const wrong = allAnswers.filter((a) => a === false).length;
    const empty = allAnswers.filter((a) => a === null).length;

    setResult({
      correct,
      wrong,
      empty,
      total: allAnswers.length,
    });

    console.log("Всего:", allAnswers.length);
    console.log("Правильных:", correct);
    console.log("Неправильных:", wrong);
    console.log("Не отвечено:", empty);
  }

  return (
    <div>
      <Header />
      <div className={styles.knowledgeTest}>
        <div className={styles.header}>
          <div className={styles.fg23}>
            {Array.from({ length: result.total }).map((_, index) => {
              let color = "#ccc";

              if (index < result.correct) color = "green";
              else if (index < result.correct + result.wrong) color = "red";
              else color = "gray";

              return (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "20px",
                    backgroundColor: color,
                    margin: "2px",
                  }}
                />
              );
            })}
          </div>
          <button className={styles.submitButton} onClick={name}>
            Проверить ответы
          </button>
        </div>

        <div className={styles.Which}>
          <button
            className={`${styles.weekButton} ${
              activeWeek === 1 ? styles.active : ""
            }`}
            onClick={() => setActiveWeek(1)}
          >
            HTML Тест
          </button>
          <button
            className={`${styles.weekButton} ${
              activeWeek === 2 ? styles.active : ""
            }`}
            onClick={() => setActiveWeek(2)}
          >
            CSS Тест
          </button>
          <button
            className={`${styles.weekButton} ${
              activeWeek === 3 ? styles.active : ""
            }`}
            onClick={() => setActiveWeek(3)}
          >
            JS Тест
          </button>
        </div>

        <div className={styles.content}>
          {activeWeek === 1 && <KnowledgeTestHtml setAnswers1={setAnswers1} />}
          {activeWeek === 2 && <KnowledgeTestCss setAnswers2={setAnswers2} />}
          {activeWeek === 3 && <KnowledgeTestJs setAnswers3={setAnswers3} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
