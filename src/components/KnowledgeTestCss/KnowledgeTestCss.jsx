import React, { useEffect, useState } from "react";
import styles from "./KnowledgeTestCss.module.scss";

export default function KnowledgeTestCss({ setAnswers2 }) {
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
    setAnswers2(answers);
  };

    useEffect(() =>{
       const answers = [
        f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
        f11, f12, f13, f14, f15, f16, f17, f18, f19, f20
      ];
      setAnswers2(answers);
  
    }, [] )

  return (
    <div className={styles.knowledgeTestCss}>
      <button onClick={submitAnswers} className={styles.submitButton}>
         отправить 
        </button>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <p className={styles.question}>1. Какой свойство задаёт цвет текста?</p>
          <div className={styles.options}>
            <button onClick={() => setF1(true)} className={styles.optionButton}>color</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>background</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>font</button>
            <button onClick={() => setF1(false)} className={styles.optionButton}>text-color</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>2. Какой свойство задаёт фон элемента?</p>
          <div className={styles.options}>
            <button onClick={() => setF2(false)} className={styles.optionButton}>color</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>bg-color</button>
            <button onClick={() => setF2(true)} className={styles.optionButton}>background-color</button>
            <button onClick={() => setF2(false)} className={styles.optionButton}>fill</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>3. Какой синтаксис правильный для задания шрифта?</p>
          <div className={styles.options}>
            <button onClick={() => setF3(true)} className={styles.optionButton}>font-family: Arial;</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>font: Arial;</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>text-font: Arial;</button>
            <button onClick={() => setF3(false)} className={styles.optionButton}>font-style: Arial;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>4. Какой тег используется для подключения внешнего CSS-файла?</p>
          <div className={styles.options}>
            <button onClick={() => setF4(false)} className={styles.optionButton}>&lt;style&gt;</button>
            <button onClick={() => setF4(true)} className={styles.optionButton}>&lt;link&gt;</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>&lt;css&gt;</button>
            <button onClick={() => setF4(false)} className={styles.optionButton}>&lt;import&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>5. Как задать жирный текст в CSS?</p>
          <div className={styles.options}>
            <button onClick={() => setF5(false)} className={styles.optionButton}>text-style: bold;</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>font-style: bold;</button>
            <button onClick={() => setF5(false)} className={styles.optionButton}>weight: bold;</button>
            <button onClick={() => setF5(true)} className={styles.optionButton}>font-weight: bold;</button>

          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>6. Как изменить размер шрифта?</p>
          <div className={styles.options}>
            <button onClick={() => setF6(true)} className={styles.optionButton}>font-size</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>text-size</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>size</button>
            <button onClick={() => setF6(false)} className={styles.optionButton}>font-scale</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>7. Как задать отступ внутри элемента?</p>
          <div className={styles.options}>
            <button onClick={() => setF7(false)} className={styles.optionButton}>margin</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>gap</button>
            <button onClick={() => setF7(true)} className={styles.optionButton}>padding</button>
            <button onClick={() => setF7(false)} className={styles.optionButton}>spacing</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>8. Как задать отступ снаружи элемента?</p>
          <div className={styles.options}>
            <button onClick={() => setF8(false)} className={styles.optionButton}>padding</button>
            <button onClick={() => setF8(true)} className={styles.optionButton}>margin</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>border</button>
            <button onClick={() => setF8(false)} className={styles.optionButton}>space</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>9. Как изменить цвет границы?</p>
          <div className={styles.options}>
            <button onClick={() => setF9(true)} className={styles.optionButton}>border-color</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>color</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>border-style</button>
            <button onClick={() => setF9(false)} className={styles.optionButton}>border-shade</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>10. Как сделать элемент невидимым, но сохранить его место?</p>
          <div className={styles.options}>
            <button onClick={() => setF10(true)} className={styles.optionButton}>visibility: hidden;</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>display: none;</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>opacity: 0;</button>
            <button onClick={() => setF10(false)} className={styles.optionButton}>hidden: true;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>11. Как полностью скрыть элемент из DOM?</p>
          <div className={styles.options}>
            <button onClick={() => setF11(false)} className={styles.optionButton}>visibility: hidden;</button>
            <button onClick={() => setF11(true)} className={styles.optionButton}>display: none;</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>opacity: 0;</button>
            <button onClick={() => setF11(false)} className={styles.optionButton}>hidden: true;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>12. Как сделать текст красного цвета?</p>
          <div className={styles.options}>
            <button onClick={() => setF12(true)} className={styles.optionButton}>color: red;</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>text-color: red;</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>font-color: red;</button>
            <button onClick={() => setF12(false)} className={styles.optionButton}>background-color: red;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>13. Как задать скруглённые углы?</p>
          <div className={styles.options}>
            <button onClick={() => setF13(true)} className={styles.optionButton}>border-radius</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>radius</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>corner-radius</button>
            <button onClick={() => setF13(false)} className={styles.optionButton}>border-corner</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>14. Как изменить прозрачность элемента?</p>
          <div className={styles.options}>
            <button onClick={() => setF14(false)} className={styles.optionButton}>transparency</button>
            <button onClick={() => setF14(false)} className={styles.optionButton}>alpha</button>
             <button onClick={() => setF14(true)} className={styles.optionButton}>opacity</button>
            <button onClick={() => setF14(false)} className={styles.optionButton}>filter</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>15. Как изменить размер элемента?</p>
          <div className={styles.options}>
            <button onClick={() => setF15(true)} className={styles.optionButton}>width / height</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>size</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>scale</button>
            <button onClick={() => setF15(false)} className={styles.optionButton}>dimension</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>16. Как задать тень для текста?</p>
          <div className={styles.options}>
            <button onClick={() => setF16(false)} className={styles.optionButton}>shadow-text</button>
            <button onClick={() => setF16(false)} className={styles.optionButton}>box-shadow</button>
            <button onClick={() => setF16(false)} className={styles.optionButton}>font-shadow</button>
            <button onClick={() => setF16(true)} className={styles.optionButton}>text-shadow</button>

          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>17. Как задать тень для блока?</p>
          <div className={styles.options}>
            <button onClick={() => setF17(true)} className={styles.optionButton}>box-shadow</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>block-shadow</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>shadow</button>
            <button onClick={() => setF17(false)} className={styles.optionButton}>text-shadow</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>18. Как изменить курсор при наведении?</p>
          <div className={styles.options}>
            <button onClick={() => setF18(true)} className={styles.optionButton}>cursor</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>pointer</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>hover</button>
            <button onClick={() => setF18(false)} className={styles.optionButton}>mouse</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>19. Как задать флекс-контейнер?</p>
          <div className={styles.options}>
            <button onClick={() => setF19(false)} className={styles.optionButton}>flex-container</button>
             <button onClick={() => setF19(true)} className={styles.optionButton}>display: flex;</button>
            <button onClick={() => setF19(false)} className={styles.optionButton}>flex</button>
            <button onClick={() => setF19(false)} className={styles.optionButton}>align: flex;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>20. Как выровнять элементы по центру по горизонтали и вертикали?</p>
          <div className={styles.options}>
            <button onClick={() => setF20(true)} className={styles.optionButton}>
              justify-content: center; align-items: center;
            </button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>text-align: center;</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>align: center;</button>
            <button onClick={() => setF20(false)} className={styles.optionButton}>center: both;</button>
          </div>
        </div>

        
      </div>
    </div>
  );
}