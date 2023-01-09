import React, { useState } from "react";
import styles from "./styles.module.css";

// import optional tippy styles for tooltip support
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Globe from "./Globe";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NetworkCard from "components/NetworkdCard";

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
          logo: "china1",
        },
        {
          name: "베이징기술교역촉진중심",
          detail: "Beijing Technology Transfer & Exchange, ...",
          "intro-link": "",
          logo: "china2",
        },
        {
          name: "상하이기술교역소",
          detail: "Shanghai Technology Transfer & Exchange Center",
          "intro-link": "",
          logo: "china3",
        },
        {
          name: "절강성과학기술교류중심",
          detail: "Zhejang Provincial and Technology Center...",
          "intro-link": "",
          logo: "china4",
        },
      ],
    },
  ];
  // const [nationsNetwork, setNationsNetwork] = useState([]);
  return (
    <div className={styles.page_wrapper}>
      <div className={`${styles.content_wrap}`}>
        <article className={styles.nations_globe_wrap}>
          <Globe activeIdx={activeIdx} updateActiveIdx={updateActiveIdx} />
          <div className={styles.nations_list_wrap}>
            <header className={styles.continents}>
              <button className={styles.cont_btn}>유럽</button>
              <button className={styles.cont_btn}>아시아</button>
              <button className={styles.cont_btn}>아메리카</button>
            </header>
            <div className={styles.nations_wrap}>
              <p className={styles.nation}>중국 </p>
              <p className={styles.nation}>중국 </p>
              <p className={styles.nation}>중국 </p>
              <p className={styles.nation}>중국 </p>
            </div>
          </div>
        </article>
        <div className={styles.boundary}></div>
        <article className={styles.nations_networklist_wrap}>
          <header className={styles.nations_header_wrap}>
            <p
              className={styles.arrow_icon}
              onClick={() => updateActiveIdx((prev) => prev !== 0 && prev - 1)}
            >
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
            <p
              className={styles.arrow_icon}
              onClick={() => updateActiveIdx((prev) => prev + 1)}
            >
              <FiChevronRight />
            </p>
          </header>
          <article className={styles.network_list}>
            {nations[activeIdx].networks.map((network, index) => (
              <NetworkCard key={index} network={network} />
            ))}
          </article>
        </article>
      </div>
    </div>
  );
}
