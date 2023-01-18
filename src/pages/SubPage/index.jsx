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
    console.log(posts);
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
        {posts && (
          <SubContentDetail
            pageName={pageName}
            activeNavId={activeNavId}
            post={posts[activeNavId]}
          />
        )}
        {isAdmin && (
          <article className={styles.btn_wrap}>
            <button
              className={styles.write_btn}
              onClick={() => {
                navigate('/admin/write');
              }}>
              글쓰기
            </button>
          </article>
        )}
      </section>
    </div>
  );
}
