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

  const nations = [
    {
      id: 0,
      "nation-eng": "CHINA",
      "nation-kor": "중국",
      networks: [
        {
          name: "ICI",
          detail: "Beijing B&R International Co-incubation",
          "intro-link": "",
          logo: "",
        },
        {
          name: "베이징기술교역촉진중심",
          detail: "Beijing Technology Transfer & Exchange, ...",
          "intro-link": "",
          logo: "",
        },
        {
          name: "상하이기술교역소",
          detail: "Shanghai Technology Transfer & Exchange Center",
          "intro-link": "",
          logo: "",
        },
        {
          name: "절강성과학기술교류중심",
          detail: "Zhejang Provincial and Technology Center...",
          "intro-link": "",
          logo: "",
        },
      ],
    },
  ];
  // // globe 에서 마커 클릭했을 때 클릭한 나라 id값 받을 변수
  // const [nationsNetwork, setNationsNetwork] = useState([]);
  return (
    <div className={styles.page_wrapper}>
      <div className={`${styles.content_wrap}`}>
        <article className={styles.nations_globe_wrap}>
          <Globe activeIdx={activeIdx} updateActiveIdx={updateActiveIdx} />
        </article>
        <article className={styles.nations_networklist_wrap}>
          <header></header>
        </article>
      </div>
    </div>
  );
}
