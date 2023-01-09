import React, { useState } from "react";
import styles from "./styles.module.css";

// import optional tippy styles for tooltip support
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Globe from "components/Globe";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NetworkCard from "components/NetworkdCard";

export default function GlobalNetwork() {
  const [activeContinentIdx, setActiveContinentIdx] = useState(0);
  const [activeNationIdx, setActiveNationIdx] = useState(0);
  const updateActiveNationIdx = (idx) => {
    setActiveNationIdx(idx);
  };
  const updateActiveContinentIdx = (idx) => {
    setActiveContinentIdx(idx);
    setActiveNationIdx(0);
  };
  const contimentBtns = () => {
    const result = [];
    const continents = ["유럽", "아시아", "아프리카"];
    for (let i = 0; i < continents.length; ++i) {
      result.push(
        <button
          key={i}
          className={`${styles.conti_btn} ${
            i === activeContinentIdx && styles.active
          }`}
          onClick={() => updateActiveContinentIdx(i)}
        >
          {continents[i]}
        </button>
      );
    }
    return result;
  };
  const nations_name = [
    ["프랑스", "영국", "유럽3", "유럽4"],
    ["중국", "베트남", "싱가포르", "밀레이시아", "일본", "인니"],
    ["아프리카1", "아프리카2", "아프리카3", "아프리카4"],
  ];

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
    {
      id: 2,
      "nation-eng": "New York",
      "nation-kor": "뉴욕",
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
  return (
    <div className={styles.page_wrapper}>
      <div className={`${styles.content_wrap}`}>
        <article className={styles.nations_globe_wrap}>
          <Globe
            activeIdx={activeNationIdx}
            updateActiveIdx={updateActiveNationIdx}
          />
          <div className={styles.nations_list_wrap}>
            <header className={styles.continents}>{contimentBtns()}</header>
            <div className={styles.nations_wrap}>
              {nations_name[activeContinentIdx].map((nation, index) => (
                <p
                  className={`${styles.nation} ${
                    activeNationIdx === index && styles.active
                  }`}
                  onClick={() => setActiveNationIdx(index)}
                >
                  {nation}
                </p>
              ))}
            </div>
          </div>
        </article>
        <div className={styles.boundary}></div>
        <article className={styles.nations_networklist_wrap}>
          <header className={styles.nations_header_wrap}>
            <p
              className={styles.arrow_icon}
              onClick={() =>
                setActiveNationIdx((prev) => prev !== 0 && prev - 1)
              }
            >
              <FiChevronLeft />
            </p>
            <div className={styles.nations_title_wrap}>
              <div className={styles.nations_title_eng}>
                {nations[activeNationIdx]["nation-eng"]} NETWORK
              </div>
              <div className={styles.nations_title_kor}>
                {nations[activeNationIdx]["nation-kor"]}
              </div>
            </div>
            <p
              className={styles.arrow_icon}
              onClick={() => setActiveNationIdx((prev) => prev + 1)}
            >
              <FiChevronRight />
            </p>
          </header>
          <article className={styles.network_list}>
            {nations[activeNationIdx].networks.map((network, index) => (
              <NetworkCard key={index} network={network} />
            ))}
          </article>
        </article>
      </div>
    </div>
  );
}
