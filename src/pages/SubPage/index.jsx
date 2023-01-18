import SubNavbar from 'components/SubNavbar';
import React, { useState, useEffect } from 'react';
import { subCategory } from 'constants/category';
import styles from './styles.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import SubContentDetail from './SubContentDetail';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getPost } from 'api/firebase';
import { useQuery } from '@tanstack/react-query';

export default function SubPage({ pageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin } = useAuthContext();
  const [activeNavId, setActiveNavId] = useState(
    location.state ? location.state.id : 0,
  );
  const updateActiveNavId = (idx) => {
    setActiveNavId((prev) => (prev = idx));
  };

  useEffect(() => {
    if (location.state) updateActiveNavId(location.state.id);
  }, [location.state]);
  const { data: posts } = useQuery([`posts`], getPost);
  useEffect(() => {
    console.log('posts변경됐대!' + posts);
  }, [posts]);

  return (
    <div className={styles.subPage_wrap}>
      <section className={styles.page_title}>
        <p>{pageName}</p>
      </section>
      <section className={styles.page_content}>
        <SubNavbar
          navItems={subCategory[pageName]}
          navTitle={pageName}
          activeNavId={activeNavId}
          updateActiveNavId={updateActiveNavId}
        />
        {posts && posts.find((v) => v.id === activeNavId) ? (
          <>
            <SubContentDetail
              pageName={pageName}
              activeNavId={activeNavId}
              post={posts[activeNavId]}
            />
            {isAdmin && (
              <article className={styles.btn_wrap}>
                <button
                  className={`${styles.write_btn} ${styles.btn}`}
                  onClick={() => {
                    navigate('/admin/write', {
                      state: { post: posts.find((v) => v.id === activeNavId) },
                      // 나중에 로직좀 바꿔야겠다.
                    });
                  }}>
                  수정
                </button>{' '}
                <button
                  className={`${styles.delete_btn} ${styles.btn}`}
                  onClick={() => {
                    navigate('/admin/write', { state: { post: null } });
                  }}>
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
                    navigate('/admin/write', { state: { post: null } });
                  }}>
                  글쓰기
                </button>
              </article>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
