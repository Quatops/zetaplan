import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

// import optional tippy styles for tooltip support
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import NetworkCard from 'components/NetworkdCard';
import Globe from 'components/Globe';

import { nations } from 'constants/nations';

export default function GlobalNetwork({ disableScroll, enableScroll }) {
  const [activeContinentIdx, setActiveContinentIdx] = useState(0);
  const [activeNationIdx, setActiveNationIdx] = useState(0);
  const updateActiveNationIdx = (idx) => {
    setActiveNationIdx(idx);
    setActiveContinentIdx(nations[idx].continent);
  };
  const updateActiveContinentIdx = (idx) => {
    setActiveContinentIdx(idx);
  };
  const contimentBtns = () => {
    const result = [];
    const continents = ['유럽', '아시아', '아메리카'];
    for (let i = 0; i < continents.length; ++i) {
      result.push(
        <button
          key={i}
          className={`${styles.conti_btn} ${
            i === activeContinentIdx && styles.active
          }`}
          onClick={() => updateActiveContinentIdx(i)}>
          {continents[i]}
        </button>,
      );
    }
    return result;
  };

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
              {nations.map(
                (nation) =>
                  nation.continent === activeContinentIdx && (
                    <p
                      key={nation.id}
                      className={`${styles.nation} ${
                        activeNationIdx === nation.id && styles.active
                      }`}
                      onClick={() => setActiveNationIdx(nation.id)}>
                      {nation.name_eng}
                    </p>
                  ),
              )}
            </div>
          </div>
        </article>
        {/* 경계선 그리기 */}
        <div className={styles.boundary}></div>
        <article className={styles.nations_networklist_wrap}>
          <header className={styles.nations_header_wrap}>
            {activeNationIdx !== 0 ? (
              <p
                className={styles.arrow_icon}
                onClick={() => updateActiveNationIdx(activeNationIdx - 1)}>
                <FiChevronLeft />
              </p>
            ) : (
              <div></div>
            )}
            <div className={styles.nations_title_wrap}>
              <div className={styles.nations_title_eng}>
                {nations[activeNationIdx].name_eng} NETWORK
              </div>
              <div className={styles.nations_title_kor}>
                {nations[activeNationIdx].name_kor}
              </div>
            </div>
            {activeNationIdx !== nations.length - 1 ? (
              <p
                className={styles.arrow_icon}
                onClick={() => updateActiveNationIdx(activeNationIdx + 1)}>
                <FiChevronRight />
              </p>
            ) : (
              <div></div>
            )}
          </header>
          <article
            className={styles.network_list}
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}>
            {nations[activeNationIdx].networks.map((network, index) => (
              <NetworkCard key={index} network={network} />
            ))}
          </article>
        </article>
      </div>
    </div>
  );
}
