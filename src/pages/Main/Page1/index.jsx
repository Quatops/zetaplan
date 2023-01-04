import React from "react";
import styles from "./styles.module.css";
import BannerCarousel from "@/components/BannerCarousel";

export default function Page1() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.main_container}>
        <div className={styles.left}>
          <div className={styles.banner}>
            <BannerCarousel />
          </div>
          <div className={styles.main_intro}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.call_info}></div>
          <div className={styles.infos}>
            <div className={styles.company_info}></div>
            <div className={styles.ect_info}></div>
            <div className={styles.map_info}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
