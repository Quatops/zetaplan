import React from "react";
import styles from "./styles.module.css";

export default function NetworkCard({ network }) {
  return (
    <div className={styles.network_wrap}>
      <div className={styles.network_logo}>
        <img src={require(`assets/${network.logo}.png`)} alt="logo" />
      </div>
      <div className={styles.network_desc}>
        <span className={styles.network_name}>{network.name}</span>
        <p className={styles.network_detial}>{network.detail}</p>
        <button className={styles.network_btn}>소개</button>
      </div>
    </div>
  );
}
