import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/profilePicture.png";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_left} >
        <img className={styles.logo} src={logo} alt="Logo" />
        <Link className={styles.header_link} to="/"> Home</Link>
        <Link className={styles.header_link} to="/"> Home</Link>
        <Link className={styles.header_link} to="/"> Home</Link>
        <Link className={styles.header_link} to="/"> Home</Link>
      </div>
      <div className={styles.header_right} > 
         <Link to="/"> 
         <img  src={profilePicture} alt="Profile Picture" />
         </Link>
      </div>
    </div>
  );
}
