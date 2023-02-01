import SubNavbar from 'components/SubNavbar';
import React, { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getPost, deletePost } from 'api/firebase';
import { useCategoryContext } from 'context/CategoryContext';

import styles from './styles.module.css';
import SubContentDetail from './SubContentDetail';
import Footer from 'components/Footer';
import Consulting from './Consulting';
import Location from './Location';

const custom_nav = {
  '상담 신청': [{ title: '상담 신청' }],
  '오시는 길': [{ title: '오시는 길' }],
  '신용 평가': [
    { title: '기업.기술 가치평가' },
    { title: '경영전략 연구소' },
    { title: '시스템 인증 기업 인증' },
    { title: 'ESG 평가 산용평가' },
  ],
  '바우처 산업': [
    { title: '기업.기술 가치평가' },
    { title: '경영전략 연구소' },
    { title: '시스템 인증 기업 인증' },
    { title: 'ESG 평가 산용평가' },
  ],
};

export default function SubPage({ pageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, subCategory } = useCategoryContext();
  const { isAdmin } = useAuthContext();
  const updateisWhite = useOutletContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNavId, setActiveNavId] = useState(
    location.state ? location.state.id : 0,
  );
  const queryClient = useQueryClient();
  const removePost = useMutation((id) => deletePost(id), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const [post, setPost] = useState(null);
  const subPageWrapperRef = useRef();
  const updateActiveNavId = (idx) => {
    setActiveNavId(idx);
  };

  useEffect(() => {
    updateisWhite(false);
  }, []);
  useEffect(() => {
    if (subCategory)
      subCategory.map((big, bid) => {
        big.map((small, sid) => {
          if (small.path === location.pathname) {
            setActiveNavId(small.id);
          }
        });
      });
  }, [subCategory]);
  useEffect(() => {
    if (location.state) setActiveNavId(location.state.id);
  }, [location.state]);

  useEffect(() => {
    getPost(activeNavId).then((data) => {
      setPost(data);
    });
  }, [activeNavId]);
  const updateScroll = () => {
    if (subPageWrapperRef.current) {
      const wrapperRefCurrent = subPageWrapperRef.current;
      setScrollPosition(
        wrapperRefCurrent.scrollY || wrapperRefCurrent.scrollTop,
      );
    }
  };
  useEffect(() => {
    if (subPageWrapperRef.current) {
      const wrapperRefCurrent = subPageWrapperRef.current;
      wrapperRefCurrent.addEventListener('scroll', updateScroll);
    }
  });
  useEffect(() => {
    scrollPosition > 100 ? updateisWhite(true) : updateisWhite(false);
  }, [scrollPosition]);

  const handleRemove = (idx) => {
    if (window.confirm('삭제하시겠습니까?')) {
      removePost.mutate(idx, {
        onSuccess: () => {
          alert('성공적으로 삭제되었습니다.');
        },
        onError: (e) => {
          alert(`에러가 발생했습니다. ${e}`);
        },
      });
    }
  };

  return (
    <>
      {category && subCategory && (
        <div className={styles.subPage_wrap} ref={subPageWrapperRef}>
          <section className={styles.page_title}>
            <p>
              {typeof pageName === 'string'
                ? pageName
                : category[pageName].title}
            </p>
          </section>
          <section className={styles.page_content}>
            <SubNavbar
              navItems={
                typeof pageName === 'string'
                  ? custom_nav[pageName]
                  : subCategory[pageName]
              }
              navTitle={
                typeof pageName === 'string'
                  ? pageName
                  : category[pageName].title
              }
              activeNavId={activeNavId}
              updateActiveNavId={updateActiveNavId}
            />
            {typeof pageName === 'string' ? (
              <>
                {pageName === '상담 신청' && <Consulting pageName={pageName} />}
                {pageName === '오시는 길' && <Location pageName={pageName} />}
              </>
            ) : post && post.id >= 0 ? (
              <>
                <SubContentDetail
                  subCategory={subCategory[pageName]}
                  category={category[post.cate].title}
                  activeNavId={activeNavId}
                  post={post}
                />
                {isAdmin && (
                  <article className={styles.btn_wrap}>
                    <button
                      className={`${styles.write_btn} ${styles.btn}`}
                      onClick={() => {
                        navigate('/admin/write', {
                          state: {
                            post,
                            category: pageName,
                            subCategory: activeNavId,
                            isNew: false,
                          },
                        });
                      }}>
                      수정
                    </button>
                    <button
                      className={`${styles.delete_btn} ${styles.btn}`}
                      onClick={() => handleRemove(activeNavId)}>
                      삭제
                    </button>
                  </article>
                )}
              </>
            ) : (
              <div>
                <p>페이지를 찾을 수 없습니다.</p>
                {isAdmin && (
                  <article className={styles.btn_wrap}>
                    <button
                      className={styles.write_btn}
                      onClick={() => {
                        navigate('/admin/write', {
                          state: {
                            post: null,
                            category: pageName,
                            subCategory: activeNavId,
                            isNew: true,
                          },
                        });
                      }}>
                      글쓰기
                    </button>
                  </article>
                )}
              </div>
            )}
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}
