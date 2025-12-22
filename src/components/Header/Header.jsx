import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/profilePicture.png";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


export default function Header() {
   const { t } = useTranslation();
  return (
    <div className={styles.header_container}>
      <div className={styles.header_left} >
        <img className={styles.logo} src={logo} alt="Logo" />
        <Link className={styles.header_link} to="/userComments"> {t("home.Comments")}</Link>
        <Link className={styles.header_link} to="/mainPage"> {t("home.link")}</Link>
        <Link className={styles.header_link} to="/mainPage"> {t("home.link")}</Link>
        <Link className={styles.header_link} to="/mainPage"> {t("home.link")}</Link>
      </div>
      <div className={styles.qwe} >
        <div>
          <BurgerMenu/>
        </div>
        <div className={styles.header_right} > 
         <Link to="/UserProfile"> 
         <img  src={profilePicture} alt="Profile Picture" />
         </Link>
      </div>
      </div>
      
    </div>
  );
}
