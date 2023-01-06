import React, { useState } from "react";
import styles from "./styles.module.css";
import BannerCarousel from "components/BannerCarousel";
import MainContents from "components/MainContents";
import { FaAngleRight, FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Button = ({ name, img }) => {
  return (
    <button className={styles.etc_btn}>
      <div className="flex_center">
        <div className={styles.etc_icon}>
          <img src={require(`assets/${img}.png`)} alt="icon" />
        </div>
        {name}
      </div>
      <FaAngleRight />
    </button>
  );
};

export default function Main() {
  const banner = ["banner_img", "banner_img", "banner_img"];
  const newsList = [
    [
      {
        id: 0,
        title: "제타플랜인베스트, 6년 연속 우수 M&A 자문기관 공로상 수상",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의",
        date: "2022-12-26",
      },
      {
        id: 1,
        title: "정부, 내년 산업계에 205조원 금융지원",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 2,
        title: "내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 3,
        title: "기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 4,
        title: "기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
    ],
    [
      {
        id: 0,
        title: "두번째텝입니당",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의",
        date: "2022-12-26",
      },
      {
        id: 1,
        title: "정부, 내년 산업계에 205조원 금융지원",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 2,
        title: "내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 3,
        title: "기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 4,
        title: "기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
    ],
    [
      {
        id: 0,
        title: "난세번쨰인데용..",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의",
        date: "2022-12-26",
      },
      {
        id: 1,
        title: "정부, 내년 산업계에 205조원 금융지원",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 2,
        title: "내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 3,
        title: "기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 4,
        title: "기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
    ],
    [
      {
        id: 0,
        title: "난네번쨰인데용ㅇ/...",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의",
        date: "2022-12-26",
      },
      {
        id: 1,
        title: "정부, 내년 산업계에 205조원 금융지원",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 2,
        title: "내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 3,
        title: "기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
      {
        id: 4,
        title: "기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축",
        thumb: "news_thumb",
        content:
          "㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...",
        date: "2022-12-26",
      },
    ],
  ];
  const intro_header = ["인사이트", "뉴스", "지원사업", "M&A · 투자IR"];
  const assess_button = [
    { name: "기업 · 기술 가치평가", icon: "value_assess_icon" },
    { name: "경영전략 연구소", icon: "management_strategy_icon" },
    { name: "시스템인증 기업인증", icon: "certification_icon" },
    { name: "ESG 평가 신용평가", icon: "ESG_assess_icon" },
  ];

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  return (
    <div className={`${styles.page_wrapper} `}>
      <div className={styles.main_container}>
        <section className={styles.left}>
          {/* banner */}
          <article className={styles.banner}>
            <BannerCarousel bannerImages={banner} />
          </article>

          {/* zetaplan insight */}
          <article className={styles.main_intro}>
            <div className={styles.intro_wrapper}>
              <ul className={styles.intro_header}>
                {intro_header.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles.header_item} ${
                      activeTabIdx === index && styles.active
                    }`}
                    onClick={() => setActiveTabIdx(index)}
                  >
                    {item}
                  </li>
                ))}
                <li className={styles.header_item}>
                  <FiPlus />
                </li>
              </ul>
              <div className={styles.intro_contents}>
                <MainContents newsList={newsList[activeTabIdx]} />
              </div>
            </div>
          </article>
        </section>
        <aside className={styles.right}>
          <section className={styles.call_info}>
            <h1>CONTACT US</h1>
            <div>
              <p>09:00 - 18:00</p>
              <span className={styles.call_number}>02&#41; 538-4801</span>
              <p>
                02&#41; 561 - 6698 | 070&#41; 8129 - 5884 | 070&#41; 8129 - 5885
              </p>
              <span className={styles.email}>zetabiz @ zetaplan.com</span>
            </div>
            <button className={styles.cosulting_apply_btn}>상담신청</button>
          </section>
          <section className={styles.infos}>
            <div className={styles.company_ass}>
              {assess_button.map((value, index) => (
                <button className={styles.ass_btn} key={index}>
                  <div className={styles.ass_icon}>
                    <img src={require(`assets/${value.icon}.png`)} alt="icon" />
                  </div>
                  <p className={styles.ass_name}>{value.name}</p>
                </button>
              ))}
            </div>
            <section className={styles.etc_info}>
              <div className={styles.etc_button_wrapper}>
                <Button
                  name="기술사업화"
                  img="technology_commercialization_icon"
                />
                <Button name="R&BD전략수집" img="cooperation_icon" />
                <Button name="협력네트워크" img="cooperation_network_icon" />
              </div>
            </section>
            <section className={styles.map_info}>
              <div>
                <span>찾아오시는 길</span>
                <p>오시는 길을 안내해 드립니다.</p>
              </div>
              <div>
                <img src={require("assets/map_icon.png")} alt="map_icon" />
              </div>
            </section>
          </section>
        </aside>
      </div>
    </div>
  );
}
