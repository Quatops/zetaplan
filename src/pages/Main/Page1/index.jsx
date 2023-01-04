import React from "react";
import styles from "./styles.module.css";
import BannerCarousel from "components/BannerCarousel";
import MainContents from "components/MainContents";

export default function Page1() {
  const banner = ["banner_img", "banner_img", "banner_img"];
  const newsList = [
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
  ];
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.main_container}>
        <div className={styles.left}>
          <div className={styles.banner}>
            <BannerCarousel bannerImages={banner} />
          </div>
          <div className={styles.main_intro}>
            <div className={styles.intro_wrapper}>
              <header className={styles.intro_header}></header>
              <div className={styles.inro_contents}>
                <MainContents newsList={newsList} />
              </div>
            </div>
          </div>
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
