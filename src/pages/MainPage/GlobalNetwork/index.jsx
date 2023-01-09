import React, { useState } from "react";
import styles from "./styles.module.css";

// import optional tippy styles for tooltip support
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Globe from "./Globe";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
          intro_link: "",
          logo: "china1",
        },
        {
          name: "베이징기술교역촉진중심",
          detail: "Beijing Technology Transfer & Exchange,dasdass dasddasdas",
          intro_link: "",
          logo: "china2",
        },
        {
          name: "상하이기술교역소",
          detail: "Shanghai Technology Transfer & Exchange Center",
          intro_link: "",
          logo: "china3",
        },
        {
          name: "절강성과학기술교류중심",
          detail: "Zhejang Provincial and Technology Center...",
          intro_link: "",
          logo: "china5",
        },
        {
          name: "절강성과학기술교류중심",
          detail: "Zhejang Provincial and Technology Center...",
          intro_link: "",
          logo: "china5",
        },
        {
          name: "절강성과학기술교류중심",
          detail: "Zhejang Provincial and Technology Center...",
          intro_link: "",
          logo: "china5",
        },
      ],
    },
    {
      id: 1,
      "nation-eng": "Vietnam",
      "nation-kor": "베트남",
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
          <header className={styles.nations_header_wrap}>
            <p className={styles.arrow_icon}>
              <FiChevronLeft />
            </p>
            <div className={styles.nations_title_wrap}>
              <div className={styles.nations_title_eng}>
                {nations[activeIdx]["nation-eng"]} NETWORK
              </div>
              <div className={styles.nations_title_kor}>
                {nations[activeIdx]["nation-kor"]}
              </div>
            </div>
            <p className={styles.arrow_icon}>
              <FiChevronRight />
            </p>
          </header>
          <article className={styles.network_list}>
            {nations[activeIdx].networks.map((network, index) => (
              <div className={styles.network_wrap} key={index}>
                <div className={styles.network_logo}>
                  <img src={require(`assets/${network.logo}.png`)} />
                </div>
                <div className={styles.network_desc}>
                  <span className={styles.network_name}>{network.name}</span>
                  <p className={styles.network_detial}>{network.detail}</p>
                  <button className={styles.network_btn}>소개</button>
                </div>
              </div>
            ))}
          </article>
        </article>
      </div>
    </div>
  );
}
