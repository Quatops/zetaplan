import React, { useState } from "react";
import styles from "./styles.module.css";

const News = ({ isPhoto, news, isActive, updateActiveNews }) => {
  var moment = require("moment");
  return (
    <>
      {isPhoto ? (
        <div
          className={`${styles.news} ${isActive && styles.active}`}
          onClick={() => updateActiveNews(news.id)}
        >
          <div className={styles.news_title}>{news.title}</div>
          <div className={styles.news_date}>
            {moment(news.date).format("YYYY년 MM월 DD일")}
          </div>
        </div>
      ) : (
        <div className={styles.news_horizon}>
          <div className={styles.news_title}>· {news.title}</div>
          <div className={styles.news_date}>
            {moment(news.date).format("YYYY년 MM월 DD일")}
          </div>
        </div>
      )}
    </>
  );
};

const NewsDetail = ({ news }) => {
  return (
    <>
      <div className={styles.thumb}>
        <img src={require(`assets/${news.thumb}.png`)} alt="thumb" />
      </div>
      <div className={styles.news_title}>{news.title}</div>
      <div className={styles.content}>{news.content}</div>
    </>
  );
};

export default function MainContents({ newsList, isPhoto }) {
  const [activeNews, setActiveNews] = useState(0);
  const updateActiveNews = (idx) => {
    console.log(idx);
    setActiveNews(idx);
  };
  return (
    <>
      {isPhoto ? (
        <div className={`${styles.contents_wrapper} flex_between`}>
          <div className={styles.contents_left}>
            <NewsDetail news={newsList[activeNews]} />
          </div>
          <div className={styles.boundary}></div>
          <div className={styles.contents_right}>
            {newsList.map((news, index) => (
              <News
                key={news.id}
                news={news}
                isActive={activeNews === index}
                updateActiveNews={updateActiveNews}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.news_list}>
            {newsList.map((news, index) => (
              <News
                isPhoto={isPhoto}
                key={news.id}
                news={news}
                isActive={activeNews === index}
                updateActiveNews={updateActiveNews}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
