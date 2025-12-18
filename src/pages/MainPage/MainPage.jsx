import React from "react";
import styles from "./MainPage.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import FirstWeek from "../../components/firstWeek/firstWeek";
import SecondWeek from "../../components/secondWeek/secondWeek";
import ThirdWeek from "../../components/ThirdWeek/ThirdWeek";

export default function MainPage() {
  return (
    <div className={styles.MainPage}>
      <Header />

      {/* <ThirdWeek />
      <SecondWeek />
      <FirstWeek /> */}
      <div className={styles.MainPage_container}>
        <div className={styles.block1}>Week 1</div>
        <div className={styles.block1}>Week 2</div>
        <div className={styles.block1}>Week 3</div>
      </div>

      <Footer />
    </div>
  );
}
