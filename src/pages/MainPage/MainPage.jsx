import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import FirstWeek from "../../components/firstWeek/firstWeek";
import SecondWeek from "../../components/secondWeek/secondWeek";
import ThirdWeek from "../../components/ThirdWeek/ThirdWeek";

export default function MainPage() {
  const [activeWeek, setActiveWeek] = useState(1);

  return (
    <div className={styles.MainPage}>
      <Header />

      <div className={styles.MainPage_container}>
        <div
          className={`${styles.block1} ${
            activeWeek === 1 ? styles.active : ""
          }`}
          onClick={() => setActiveWeek(1)}
        >
          Week 1
        </div>
        <div
          className={`${styles.block1} ${
            activeWeek === 2 ? styles.active : ""
          }`}
          onClick={() => setActiveWeek(2)}
        >
          Week 2
        </div>
        <div
          className={`${styles.block1} ${
            activeWeek === 3 ? styles.active : ""
          }`}
          onClick={() => setActiveWeek(3)}
        >
          Week 3
        </div>
      </div>

      <div className={styles.content}>
        {activeWeek === 1 && <FirstWeek />}
        {activeWeek === 2 && <SecondWeek />}
        {activeWeek === 3 && <ThirdWeek />}
      </div>

      <Footer />
    </div>
  );
}
