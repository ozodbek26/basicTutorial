import React, { useEffect, useState } from "react";
import styles from "./KnowledgeTestHtml.module.scss";

export default function KnowledgeTestHtml({ setAnswers1 }) {
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
    setAnswers1(answers);
  };

  useEffect(() =>{
     const answers = [
      f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
      f11, f12, f13, f14, f15, f16, f17, f18, f19, f20
    ];
    setAnswers1(answers);

  }, [] )

  return (
    <div className={styles.KnowledgeTestHtml}>
       <button onClick={submitAnswers} className={styles.submitButton}>
        отправить 
        </button>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <p className={styles.question}>1. Какой тег используется для создания ссылки?</p>
          <div className={styles.options}>
            <button onClick={() => setF1(true)} className={styles.optionButton}>&lt;a&gt;</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>&lt;link&gt;</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>&lt;href&gt;</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>&lt;url&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>2. Какой тег отвечает за заголовок первого уровня?</p>
          <div className={styles.options}>
            <button onClick={() => setF2(true)} className={styles.optionButton}>&lt;h1&gt;</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>&lt;h6&gt;</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>&lt;head&gt;</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>&lt;header&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>3. Какой тег используется для создания абзаца?</p>
          <div className={styles.options}>
            <button onClick={() => setF3(true)} className={styles.optionButton}>&lt;p&gt;</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>&lt;div&gt;</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>&lt;span&gt;</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>&lt;paragraph&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>4. Какой тег используется для вставки изображения?</p>
          <div className={styles.options}>
            <button onClick={() => setF4(true)} className={styles.optionButton}>&lt;img&gt;</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>&lt;image&gt;</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>&lt;picture&gt;</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>&lt;src&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>5. Какой атрибут у тега &lt;img&gt; задаёт путь к файлу изображения?</p>
          <div className={styles.options}>
            <button onClick={() => setF5(true)} className={styles.optionButton}>src</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>href</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>link</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>path</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>6. Какой тег создаёт нумерованный список?</p>
          <div className={styles.options}>
            <button onClick={() => setF6(true)} className={styles.optionButton}>&lt;ol&gt;</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>&lt;ul&gt;</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>&lt;li&gt;</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>&lt;list&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>7. Какой тег создаёт ненумерованный список?</p>
          <div className={styles.options}>
            <button onClick={() => setF7(true)} className={styles.optionButton}>&lt;ul&gt;</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>&lt;ol&gt;</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>&lt;li&gt;</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>&lt;list&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>8. Какой тег создаёт элемент списка?</p>
          <div className={styles.options}>
            <button onClick={() => setF8(true)} className={styles.optionButton}>&lt;li&gt;</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>&lt;ul&gt;</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>&lt;ol&gt;</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>&lt;list&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>9. Какой тег используется для вставки таблицы?</p>
          <div className={styles.options}>
            <button onClick={() => setF9(true)} className={styles.optionButton}>&lt;table&gt;</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>&lt;tr&gt;</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>&lt;td&gt;</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>&lt;tab&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>10. Какой тег создаёт строку таблицы?</p>
          <div className={styles.options}>
            <button onClick={() => setF10(true)} className={styles.optionButton}>&lt;tr&gt;</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>&lt;td&gt;</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>&lt;table&gt;</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>&lt;row&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>11. Какой тег создаёт ячейку таблицы?</p>
          <div className={styles.options}>
            <button onClick={() => setF11(true)} className={styles.optionButton}>&lt;td&gt;</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>&lt;tr&gt;</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>&lt;table&gt;</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>&lt;cell&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>12. Какой тег задаёт жирный текст?</p>
          <div className={styles.options}>
            <button onClick={() => setF12(false)} className={styles.optionButton}>&lt;b&gt;</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>&lt;i&gt;</button>
            <button onClick={() => setF12(true)} className={styles.optionButton}>&lt;strong&gt;</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>&lt;em&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>13. Какой тег задаёт курсив?</p>
          <div className={styles.options}>
            <button onClick={() => setF13(false)} className={styles.optionButton}>&lt;i&gt;</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>&lt;b&gt;</button>
            <button onClick={() => setF13(true)} className={styles.optionButton}>&lt;em&gt;</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>&lt;strong&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>14. Какой тег используется для ввода текста?</p>
          <div className={styles.options}>
            <button onClick={() => setF14(false)} className={styles.optionButton}>&lt;input&gt;</button>
            <button onClick={() => setF14(true)} className={styles.optionButton}>&lt;textarea&gt;</button>
            <button onClick={() => setF14(false)} className={styles.optionButton}>&lt;form&gt;</button>
            <button onClick={() => setF14(false)} className={styles.optionButton}>&lt;text&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>15. Какой тег создаёт форму?</p>
          <div className={styles.options}>
            <button onClick={() => setF15(false)} className={styles.optionButton}>&lt;input&gt;</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>&lt;textarea&gt;</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>&lt;submit&gt;</button>
            <button onClick={() => setF15(true)} className={styles.optionButton}>&lt;form&gt;</button>

          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>16. Какой тег используется для комментариев?</p>
          <div className={styles.options}>
            <button onClick={() => setF16(false)} className={styles.optionButton}>&lt;comment&gt;</button>
            <button onClick={() => setF16(true)} className={styles.optionButton}>&lt;!-- --&gt;</button>
            <button onClick={() => setF16(false)} className={styles.optionButton}>&lt;cm&gt;</button>
            <button onClick={() => setF16(false)} className={styles.optionButton}>&lt;cite&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>17. Какой тег задаёт заголовок для таблицы?</p>
          <div className={styles.options}>
            <button onClick={() => setF17(true)} className={styles.optionButton}>&lt;caption&gt;</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>&lt;title&gt;</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>&lt;thead&gt;</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>&lt;header&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>18. Какой тег создаёт горизонтальную линию?</p>
          <div className={styles.options}>
            <button onClick={() => setF18(true)} className={styles.optionButton}>&lt;hr&gt;</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>&lt;line&gt;</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>&lt;hl&gt;</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>&lt;border&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>19. Какой тег задаёт мета-информацию для документа?</p>
          <div className={styles.options}>
            <button onClick={() => setF19(false)} className={styles.optionButton}>&lt;head&gt;</button>
            <button onClick={() => setF19(false)} className={styles.optionButton}>&lt;link&gt;</button>
            <button onClick={() => setF19(true)} className={styles.optionButton}>&lt;meta&gt;</button>
            <button onClick={() => setF19(false)} className={styles.optionButton}>&lt;title&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>20. Какой тег используется для подключения внешнего CSS-файла?</p>
          <div className={styles.options}>
            <button onClick={() => setF20(true)} className={styles.optionButton}>&lt;link&gt;</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>&lt;style&gt;</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>&lt;css&gt;</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>&lt;import&gt;</button>
          </div>
        </div>

       
      </div>
    </div>
  );
}