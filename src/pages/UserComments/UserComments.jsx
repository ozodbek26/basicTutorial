import React, { useDebugValue, useState } from "react";
import styles from "./UserComments.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import profilePicture from "../../assets/images/profilePicture.png";

export default function UserComments() {
  const [activeWeek, setActiveWeek] = useState([
    {
      id: 1,
      name: "Алексей К.",
      comments:
        "Отличная первая неделя! Всё объяснено просто и по делу. Особенно понравился урок про основы — наконец-то всё стало на свои места.",
    },
    {
      id: 2,
      name: "Марина_2001",
      comments:
        "Спасибо за курс! Давно хотела начать, но боялась, что будет сложно. А тут всё понятно даже новичку. Жду вторую неделю!",
    },
    {
      id: 3,
      name: "Дмитрий Про",
      comments:
        "Круто, что есть практические задания после каждого видео. Сразу закрепляешь материал. Рекомендую всем!",
    },
    {
      id: 4,
      name: "Катя С.",
      comments:
        "Инструктор объясняет спокойно и без воды — это большой плюс. Не ожидала, что за неделю так много узнаю. Спасибо!",
    },
    {
      id: 5,
      name: "Виктор_85",
      comments:
        "Прошёл первую неделю на одном дыхании. Материал актуальный, примеры из реальной жизни. Уже применяю на работе!",
    },
    {
      id: 6,
      name: "olga_design",
      comments:
        "Очень понравился дизайн уроков и структура. Всё логично, ничего лишнего. Лучший курс из тех, что я проходила за последнее время.",
    },
    {
      id: 7,
      name: "Сергей IT",
      comments:
        "Для начинающих — идеально. Никакого перегруза информацией, всё дозировано. Жду продолжения!",
    },
    {
      id: 8,
      name: "Аня_Студентка",
      comments:
        "Учусь в универе, и этот курс отлично дополняет мою программу. Спасибо автору за доступное объяснение сложных тем!",
    },
  ]);

  return (
    <div className={styles.UserComments}>
      <Header />
      <div className={styles.UserComments_Comments1}>
        <input
          placeholder="Comments"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
        />
        <button>Post</button>
      </div>
      <div className={styles.UserComments_Comments2}>
        {activeWeek.map((ee, index) => {
          return (
            <div key={index} className={styles.UserComments_Comments2_blocks}>
              <div className={styles.block_name}>
                <div className={styles.block_img}>
                  <img className={styles.img} src={profilePicture} alt="" />
                </div>
                <p>{ee.name}</p>
              </div>

              <p>{ee.comments}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
