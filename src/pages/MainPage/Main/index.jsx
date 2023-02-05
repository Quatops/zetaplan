import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from 'context/AuthContext';
import AdminEditBanner from 'components/AdminEdits/AdminEditBanner';
import { useMain } from 'hooks/useItems';
import MainArticleTabs from './MainArticleTabs';
import MainAsideBtn2 from './MainAsideBtn2';
import MainContactUs from './MainContactUs';
import MainAsideBtn1 from './MainAsideBtn1';
import BannerCarousel from 'components/BannerCarousel';
import MainArticles from 'pages/MainPage/Main/MainArticles';
import AdminEditAsideBtn1 from 'components/AdminEdits/AdminEditAsideBtn1';
import AdminEditAsideBtn2 from 'components/AdminEdits/AdminEditAsideBtn2';
import AdminEditArticles from 'components/AdminEdits/AdminEditArticles';

import { useCategoryContext } from 'context/CategoryContext';

const newsList = [
  [
    {
      id: 0,
      title: '제타플랜인베스트, 6년 연속 우수 M&A 자문기관 공로상 수상',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의',
      date: '2022-12-26',
    },
    {
      id: 1,
      title: '정부, 내년 산업계에 205조원 금융지원',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 2,
      title: '내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 3,
      title: '기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 4,
      title: '기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
  ],
  [
    {
      id: 0,
      title: '두번째텝입니당',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의',
      date: '2022-12-26',
    },
    {
      id: 1,
      title: '정부, 내년 산업계에 205조원 금융지원',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 2,
      title: '내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 3,
      title: '기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 4,
      title: '기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
  ],
  [
    {
      id: 0,
      title: '세번쨰',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의',
      date: '2022-12-26',
    },
    {
      id: 1,
      title: '정부, 내년 산업계에 205조원 금융지원',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 2,
      title: '내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 3,
      title: '기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 4,
      title: '기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 5,
      title: '기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 6,
      title: '기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
  ],
  [
    {
      id: 0,
      title: '네번째',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의',
      date: '2022-12-26',
    },
    {
      id: 1,
      title: '정부, 내년 산업계에 205조원 금융지원',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 2,
      title: '내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 3,
      title: '기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 4,
      title: '기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
  ],
  [
    {
      id: 0,
      title: '다섯번째 탭',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의 기여한 공로로 지난 12월 15일 중소벤처기업부의',
      date: '2022-12-26',
    },
    {
      id: 1,
      title: '정부, 내년 산업계에 205조원 금융지원',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 2,
      title: '내년 TIPS 600개, 올해보다 100개 더 뽑는다···운영사 35개 추가',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 3,
      title: '기업가정신 수준 개인·기업 동시↑…기업 긍정인식＞반기업정서',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
    {
      id: 4,
      title: '기보, 기술거래 플랫폼 ‘스마트 테크 브릿지’ 구축',
      thumb: 'news_thumb',
      content:
        '㈜제타플랜인베스트(이하 ‘제타플랜’)은 국내 투자 후 회수 시장의 활성화에 기여한 공로로 지난 12월 15일 중소벤처기업부의...',
      date: '2022-12-26',
    },
  ],
];

export default function Main() {
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  const { category, subCategory } = useCategoryContext();

  const { modifyBanner, modifyIntroTab, modifyAsideBtn1, modifyAsideBtn2 } =
    useMain();

  // 편집버튼 보이기 여부
  const [activeBannerEditBtn, setActiveBannerEditBtn] = useState(false);
  const [activeArticleEditBtn, setActiveArticleEditBtn] = useState(false);
  const [activeAsideBtn1, setActiveAsideBtn1] = useState(false);
  const [activeAsideBtn2, setActiveAsideBtn2] = useState(false);

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const updateActiveTabIdx = (idx) => {
    setActiveTabIdx(idx);
  };

  // 데이터 불러오기
  const {
    BannerQuery: { data: banner },
  } = useMain();
  const {
    IntroTabQuery: { data: intro_tab },
  } = useMain();
  const {
    AsideBtn1Query: { data: aside_btn1 },
  } = useMain();
  const {
    AsideBtn2Query: { data: aside_btn2 },
  } = useMain();

  const {
    ContactUsQuery: { data: contact_us },
  } = useMain();

  // 수정완료 다루기
  const handleBannerSubmit = (images) => {
    modifyBanner.mutate(images, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };

  const handleIntroTabSubmit = (tabs) => {
    intro_tab.forEach((v, index) => {
      v.name = tabs[index];
    });
    modifyIntroTab.mutate(intro_tab, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };

  const handleAsideBtn1Submit = (btns) => {
    modifyAsideBtn1.mutate(btns, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };

  const handleAsideBtn2Submit = (btns) => {
    modifyAsideBtn2.mutate(btns, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };
  return (
    <div className={`${styles.page_wrapper} `}>
      <div className={styles.main_container}>
        <section className={styles.left}>
          {/* banner */}
          <article
            className={styles.banner}
            onMouseEnter={() => setActiveBannerEditBtn(true)}
            onMouseLeave={() => setActiveBannerEditBtn(false)}>
            {banner && (
              <>
                <BannerCarousel bannerImages={banner} isAdmin={isAdmin} />
                {isAdmin && activeBannerEditBtn && (
                  <AdminEditBanner
                    baseImages={banner}
                    position={{ top: '10px', right: '10px' }}
                    handleBannerSubmit={handleBannerSubmit}
                  />
                )}
              </>
            )}
          </article>

          <article className={styles.main_intro}>
            {intro_tab && (
              <div className={styles.intro_wrapper}>
                <MainArticleTabs
                  intro_tab={intro_tab}
                  isAdmin={isAdmin}
                  updateActiveTabIdx={updateActiveTabIdx}
                  activeTabIdx={activeTabIdx}
                  handleIntroTabSubmit={handleIntroTabSubmit}
                />
                <div
                  className={styles.intro_contents}
                  onMouseEnter={() => setActiveArticleEditBtn(true)}
                  onMouseLeave={() => setActiveArticleEditBtn(false)}>
                  {isAdmin && activeArticleEditBtn && (
                    <AdminEditArticles
                      position={{ top: '10px', right: '10px' }}
                      handleBannerSubmit={handleBannerSubmit}
                    />
                  )}
                  <MainArticles
                    newsList={newsList[activeTabIdx]}
                    isPhoto={intro_tab[activeTabIdx].isPhoto}
                  />
                </div>
              </div>
            )}
          </article>
        </section>
        <aside className={styles.right}>
          <section className={styles.call_info}>
            <div className={styles.call_wrap}>
              {contact_us && <MainContactUs contact_us={contact_us} />}
            </div>
          </section>
          <section className={styles.infos}>
            <article
              className={styles.company_ass}
              onMouseEnter={() => setActiveAsideBtn1(true)}
              onMouseLeave={() => setActiveAsideBtn1(false)}>
              {aside_btn1 && (
                <>
                  {category && subCategory && (
                    <MainAsideBtn1
                      aside_btn1={aside_btn1}
                      category={category}
                      subCategory={subCategory}
                    />
                  )}
                  {isAdmin && activeAsideBtn1 && (
                    <AdminEditAsideBtn1
                      handleAsideBtn1Submit={handleAsideBtn1Submit}
                      position={{ top: '10px', right: '10px' }}
                      aside_btn1={aside_btn1}
                    />
                  )}
                </>
              )}
            </article>
            <article
              className={styles.etc_info}
              onMouseEnter={() => setActiveAsideBtn2(true)}
              onMouseLeave={() => setActiveAsideBtn2(false)}>
              {aside_btn2 && (
                <>
                  {category && subCategory && (
                    <MainAsideBtn2
                      aside_btn2={aside_btn2}
                      category={category}
                      subCategory={subCategory}
                    />
                  )}
                  {isAdmin && activeAsideBtn2 && (
                    <AdminEditAsideBtn2
                      category={category}
                      handleAsideBtn2Submit={handleAsideBtn2Submit}
                      position={{ top: '10px', right: '10px' }}
                      aside_btn2={aside_btn2}
                    />
                  )}
                </>
              )}
            </article>
            <article
              className={styles.map_info}
              onClick={() => navigate('/location')}>
              <div>
                <span>찾아오시는 길</span>
                <p>오시는 길을 안내해 드립니다.</p>
              </div>
              <div>
                <img src={require('assets/map_icon.png')} alt="map_icon" />
              </div>
            </article>
          </section>
        </aside>
      </div>
    </div>
  );
}
