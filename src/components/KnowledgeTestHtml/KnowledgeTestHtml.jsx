import React from "react";

import styles from "./KnowledgeTestHtml.module.scss";


export default function KnowledgeTestHtml() {
  return (
    <div className={styles.KnowledgeTestHtml} >
      <div className={styles.tasks}>
        {/* Вопрос 1 */}
        <div className={styles.task}>
          <p className={styles.question}>
            1. Какой тег используется для создания ссылки?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;a&gt;</button>
            <button className={styles.optionButton}>&lt;link&gt;</button>
            <button className={styles.optionButton}>&lt;href&gt;</button>
            <button className={styles.optionButton}>&lt;url&gt;</button>
          </div>
        </div>

        {/* Вопрос 2 */}
        <div className={styles.task}>
          <p className={styles.question}>
            2. Какой тег отвечает за заголовок первого уровня?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;h1&gt;</button>
            <button className={styles.optionButton}>&lt;h6&gt;</button>
            <button className={styles.optionButton}>&lt;head&gt;</button>
            <button className={styles.optionButton}>&lt;header&gt;</button>
          </div>
        </div>

        {/* Вопрос 3 */}
        <div className={styles.task}>
          <p className={styles.question}>
            3. Какой тег используется для создания абзаца?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;p&gt;</button>
            <button className={styles.optionButton}>&lt;div&gt;</button>
            <button className={styles.optionButton}>&lt;span&gt;</button>
            <button className={styles.optionButton}>&lt;paragraph&gt;</button>
          </div>
        </div>

        {/* Вопрос 4 */}
        <div className={styles.task}>
          <p className={styles.question}>
            4. Какой тег используется для вставки изображения?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;img&gt;</button>
            <button className={styles.optionButton}>&lt;image&gt;</button>
            <button className={styles.optionButton}>&lt;picture&gt;</button>
            <button className={styles.optionButton}>&lt;src&gt;</button>
          </div>
        </div>

        {/* Вопрос 5 */}
        <div className={styles.task}>
          <p className={styles.question}>
            5. Какой атрибут у тега &lt;img&gt; задаёт путь к файлу изображения?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>src</button>
            <button className={styles.optionButton}>href</button>
            <button className={styles.optionButton}>link</button>
            <button className={styles.optionButton}>path</button>
          </div>
        </div>

        {/* Вопрос 6 */}
        <div className={styles.task}>
          <p className={styles.question}>
            6. Какой тег создаёт нумерованный список?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;ol&gt;</button>
            <button className={styles.optionButton}>&lt;ul&gt;</button>
            <button className={styles.optionButton}>&lt;li&gt;</button>
            <button className={styles.optionButton}>&lt;list&gt;</button>
          </div>
        </div>

        {/* Вопрос 7 */}
        <div className={styles.task}>
          <p className={styles.question}>
            7. Какой тег создаёт ненумерованный список?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;ul&gt;</button>
            <button className={styles.optionButton}>&lt;ol&gt;</button>
            <button className={styles.optionButton}>&lt;li&gt;</button>
            <button className={styles.optionButton}>&lt;list&gt;</button>
          </div>
        </div>

        {/* Вопрос 8 */}
        <div className={styles.task}>
          <p className={styles.question}>
            8. Какой тег создаёт элемент списка?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;li&gt;</button>
            <button className={styles.optionButton}>&lt;ul&gt;</button>
            <button className={styles.optionButton}>&lt;ol&gt;</button>
            <button className={styles.optionButton}>&lt;list&gt;</button>
          </div>
        </div>

        {/* Вопрос 9 */}
        <div className={styles.task}>
          <p className={styles.question}>
            9. Какой тег используется для вставки таблицы?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;table&gt;</button>
            <button className={styles.optionButton}>&lt;tr&gt;</button>
            <button className={styles.optionButton}>&lt;td&gt;</button>
            <button className={styles.optionButton}>&lt;tab&gt;</button>
          </div>
        </div>

        {/* Вопрос 10 */}
        <div className={styles.task}>
          <p className={styles.question}>
            10. Какой тег создаёт строку таблицы?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;tr&gt;</button>
            <button className={styles.optionButton}>&lt;td&gt;</button>
            <button className={styles.optionButton}>&lt;table&gt;</button>
            <button className={styles.optionButton}>&lt;row&gt;</button>
          </div>
        </div>

        {/* Вопрос 11 */}
        <div className={styles.task}>
          <p className={styles.question}>
            11. Какой тег создаёт ячейку таблицы?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;td&gt;</button>
            <button className={styles.optionButton}>&lt;tr&gt;</button>
            <button className={styles.optionButton}>&lt;table&gt;</button>
            <button className={styles.optionButton}>&lt;cell&gt;</button>
          </div>
        </div>

        {/* Вопрос 12 */}
        <div className={styles.task}>
          <p className={styles.question}>12. Какой тег задаёт жирный текст?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;b&gt;</button>
            <button className={styles.optionButton}>&lt;i&gt;</button>
            <button className={styles.optionButton}>&lt;strong&gt;</button>
            <button className={styles.optionButton}>&lt;em&gt;</button>
          </div>
        </div>

        {/* Вопрос 13 */}
        <div className={styles.task}>
          <p className={styles.question}>13. Какой тег задаёт курсив?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;i&gt;</button>
            <button className={styles.optionButton}>&lt;b&gt;</button>
            <button className={styles.optionButton}>&lt;em&gt;</button>
            <button className={styles.optionButton}>&lt;strong&gt;</button>
          </div>
        </div>

        {/* Вопрос 14 */}
        <div className={styles.task}>
          <p className={styles.question}>
            14. Какой тег используется для ввода текста?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;input&gt;</button>
            <button className={styles.optionButton}>&lt;textarea&gt;</button>
            <button className={styles.optionButton}>&lt;form&gt;</button>
            <button className={styles.optionButton}>&lt;text&gt;</button>
          </div>
        </div>

        {/* Вопрос 15 */}
        <div className={styles.task}>
          <p className={styles.question}>15. Какой тег создаёт форму?</p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;form&gt;</button>
            <button className={styles.optionButton}>&lt;input&gt;</button>
            <button className={styles.optionButton}>&lt;textarea&gt;</button>
            <button className={styles.optionButton}>&lt;submit&gt;</button>
          </div>
        </div>

        {/* Вопрос 16 */}
        <div className={styles.task}>
          <p className={styles.question}>
            16. Какой тег используется для комментариев?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;!-- --&gt;</button>
            <button className={styles.optionButton}>&lt;comment&gt;</button>
            <button className={styles.optionButton}>&lt;cm&gt;</button>
            <button className={styles.optionButton}>&lt;cite&gt;</button>
          </div>
        </div>

        {/* Вопрос 17 */}
        <div className={styles.task}>
          <p className={styles.question}>
            17. Какой тег задаёт заголовок для таблицы?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;caption&gt;</button>
            <button className={styles.optionButton}>&lt;title&gt;</button>
            <button className={styles.optionButton}>&lt;thead&gt;</button>
            <button className={styles.optionButton}>&lt;header&gt;</button>
          </div>
        </div>

        {/* Вопрос 18 */}
        <div className={styles.task}>
          <p className={styles.question}>
            18. Какой тег создаёт горизонтальную линию?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;hr&gt;</button>
            <button className={styles.optionButton}>&lt;line&gt;</button>
            <button className={styles.optionButton}>&lt;hl&gt;</button>
            <button className={styles.optionButton}>&lt;border&gt;</button>
          </div>
        </div>

        {/* Вопрос 19 */}
        <div className={styles.task}>
          <p className={styles.question}>
            19. Какой тег задаёт мета-информацию для документа?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;meta&gt;</button>
            <button className={styles.optionButton}>&lt;head&gt;</button>
            <button className={styles.optionButton}>&lt;link&gt;</button>
            <button className={styles.optionButton}>&lt;title&gt;</button>
          </div>
        </div>

        {/* Вопрос 20 */}
        <div className={styles.task}>
          <p className={styles.question}>
            20. Какой тег используется для подключения внешнего CSS-файла?
          </p>
          <div className={styles.options}>
            <button className={styles.optionButton}>&lt;link&gt;</button>
            <button className={styles.optionButton}>&lt;style&gt;</button>
            <button className={styles.optionButton}>&lt;css&gt;</button>
            <button className={styles.optionButton}>&lt;import&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
