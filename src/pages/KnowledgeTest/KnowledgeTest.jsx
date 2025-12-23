import React, { useState } from "react";
import styles from "./KnowledgeTest.module.scss";
import KnowledgeTestHtml from "../../components/KnowledgeTestHtml/KnowledgeTestHtml";
import KnowledgeTestCss from "../../components/KnowledgeTestCss/KnowledgeTestCss";
import KnowledgeTestJs from "../../components/KnowledgeTestJs/KnowledgeTestJs";

export default function KnowledgeTest() {
  const [activeWeek, setActiveWeek] = useState(1);
  

  return (
    <div className={styles.knowledgeTest}>
      <div className={styles.header}>
        <div className={styles.result}>Результат: 0</div>
        <div className={styles.whichOne}>Вопрос 1 из 20</div>
      </div>
      <div className={styles.Which}>
        <button className={`${styles.weekButton} ${  activeWeek === 1 ? styles.active : ""}`} onClick={() => setActiveWeek(1)} >
          KnowledgeTestHtml
        </button>
        <button className={`${styles.weekButton} ${ activeWeek === 2 ? styles.active : "" }`}
          onClick={() => setActiveWeek(2)}
        >
          KnowledgeTestCss
        </button>
        <button className={`${styles.weekButton} ${ activeWeek === 3 ? styles.active : "" }`}
          onClick={() => setActiveWeek(3)}
        >
          KnowledgeTestJs
        </button>
      </div>

      <div className={styles.content}>
        {activeWeek === 1 && <KnowledgeTestHtml />}
        {activeWeek === 2 && <KnowledgeTestCss />}
        {activeWeek === 3 && <KnowledgeTestJs />}
      </div>
    </div>
  );
}
