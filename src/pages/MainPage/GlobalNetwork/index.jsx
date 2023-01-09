import React, { useState } from "react";
import styles from "./styles.module.css";

// import optional tippy styles for tooltip support
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Globe from "./Globe";

export default function GlobalNetwork() {
  const [activeIdx, setActiveIdx] = useState(0);
  const updateActiveIdx = (idx) => {
    setActiveIdx(idx);
  };
  // // globe 에서 마커 클릭했을 때 클릭한 나라 id값 받을 변수
  // const [nationsNetwork, setNationsNetwork] = useState([]);
  return (
    <div className={styles.page_wrapper}>
      <div className={`${styles.content_wrap}`}>
        <article className={styles.nations_globe_wrap}>
          <Globe activeIdx={activeIdx} updateActiveIdx={updateActiveIdx} />
        </article>
        <article className={styles.nations_networklist_wrap}>
          ssssssssssssssssssssss
        </article>
      </div>
    </div>
  );
}
