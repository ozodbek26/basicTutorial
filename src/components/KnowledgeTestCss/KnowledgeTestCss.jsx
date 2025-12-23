import React from "react";
import styles from "./KnowledgeTestCss.module.scss";

export default function KnowledgeTestCss() {
  return (
    <div className={styles.knowledgeTestCss}>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <p className={styles.question}>
            1. Какой свойство задаёт цвет текста?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>color</button>
            <button className={styles.optionButton}>background</button>
            <button className={styles.optionButton}>font</button>
            <button className={styles.optionButton}>text-color</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            2. Какой свойство задаёт фон элемента?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>background-color</button>
            <button className={styles.optionButton}>color</button>
            <button className={styles.optionButton}>bg-color</button>
            <button className={styles.optionButton}>fill</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            3. Какой синтаксис правильный для задания шрифта?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>font-family: Arial;</button>
            <button className={styles.optionButton}>font: Arial;</button>
            <button className={styles.optionButton}>text-font: Arial;</button>
            <button className={styles.optionButton}>font-style: Arial;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            4. Какой тег используется для подключения внешнего CSS-файла?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;link&gt;</button>
            <button className={styles.optionButton}>&lt;style&gt;</button>
            <button className={styles.optionButton}>&lt;css&gt;</button>
            <button className={styles.optionButton}>&lt;import&gt;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>5. Как задать жирный текст в CSS?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>font-weight: bold;</button>
            <button className={styles.optionButton}>text-style: bold;</button>
            <button className={styles.optionButton}>font-style: bold;</button>
            <button className={styles.optionButton}>weight: bold;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>6. Как изменить размер шрифта?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>font-size</button>
            <button className={styles.optionButton}>text-size</button>
            <button className={styles.optionButton}>size</button>
            <button className={styles.optionButton}>font-scale</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            7. Как задать отступ внутри элемента?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>padding</button>
            <button className={styles.optionButton}>margin</button>
            <button className={styles.optionButton}>gap</button>
            <button className={styles.optionButton}>spacing</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            8. Как задать отступ снаружи элемента?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>margin</button>
            <button className={styles.optionButton}>padding</button>
            <button className={styles.optionButton}>border</button>
            <button className={styles.optionButton}>space</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>9. Как изменить цвет границы?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>border-color</button>
            <button className={styles.optionButton}>color</button>
            <button className={styles.optionButton}>border-style</button>
            <button className={styles.optionButton}>border-shade</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            10. Как сделать элемент невидимым, но сохранить его место?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>visibility: hidden;</button>
            <button className={styles.optionButton}>display: none;</button>
            <button className={styles.optionButton}>opacity: 0;</button>
            <button className={styles.optionButton}>hidden: true;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            11. Как полностью скрыть элемент из DOM?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>display: none;</button>
            <button className={styles.optionButton}>visibility: hidden;</button>
            <button className={styles.optionButton}>opacity: 0;</button>
            <button className={styles.optionButton}>hidden: true;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            12. Как сделать текст красного цвета?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>color: red;</button>
            <button className={styles.optionButton}>text-color: red;</button>
            <button className={styles.optionButton}>font-color: red;</button>
            <button className={styles.optionButton}>
              background-color: red;
            </button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>13. Как задать скруглённые углы?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>border-radius</button>
            <button className={styles.optionButton}>radius</button>
            <button className={styles.optionButton}>corner-radius</button>
            <button className={styles.optionButton}>border-corner</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            14. Как изменить прозрачность элемента?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>opacity</button>
            <button className={styles.optionButton}>transparency</button>
            <button className={styles.optionButton}>alpha</button>
            <button className={styles.optionButton}>filter</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>15. Как изменить размер элемента?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>width / height</button>
            <button className={styles.optionButton}>size</button>
            <button className={styles.optionButton}>scale</button>
            <button className={styles.optionButton}>dimension</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>16. Как задать тень для текста?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>text-shadow</button>
            <button className={styles.optionButton}>shadow-text</button>
            <button className={styles.optionButton}>box-shadow</button>
            <button className={styles.optionButton}>font-shadow</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>17. Как задать тень для блока?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>box-shadow</button>
            <button className={styles.optionButton}>block-shadow</button>
            <button className={styles.optionButton}>shadow</button>
            <button className={styles.optionButton}>text-shadow</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            18. Как изменить курсор при наведении?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>cursor</button>
            <button className={styles.optionButton}>pointer</button>
            <button className={styles.optionButton}>hover</button>
            <button className={styles.optionButton}>mouse</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>19. Как задать флекс-контейнер?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>display: flex;</button>
            <button className={styles.optionButton}>flex-container</button>
            <button className={styles.optionButton}>flex</button>
            <button className={styles.optionButton}>align: flex;</button>
          </div>
        </div>

        <div className={styles.task}>
          <p className={styles.question}>
            20. Как выровнять элементы по центру по горизонтали и вертикали?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>
              justify-content: center; align-items: center;
            </button>
            <button className={styles.optionButton}>text-align: center;</button>
            <button className={styles.optionButton}>align: center;</button>
            <button className={styles.optionButton}>center: both;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
