import SubNavbar from 'components/SubNavbar';
import React, { useState, useEffect } from 'react';
import { category, subCategory } from 'constants/category';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import SubContentDetail from './SubContentDetail';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getPost } from 'api/firebase';

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

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (location.state) updateActiveNavId(location.state.id);
  }, [location.state]);
  //const { data: post } = useQuery([`post`], () => getPost(activeNavId));
  useEffect(() => {
    getPost(activeNavId).then((data) => {
      setPost(data);
      console.log(data);
    });
  }, [activeNavId]);

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
        {post ? (
          <>
            <SubContentDetail
              subCategory={subCategory[pageName]}
              category={category}
              activeNavId={activeNavId}
              post={post}
            />
            {isAdmin && (
              <article className={styles.btn_wrap}>
                <button
                  className={`${styles.write_btn} ${styles.btn}`}
                  onClick={() => {
                    navigate('/admin/write', {
                      state: { post: post },
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
