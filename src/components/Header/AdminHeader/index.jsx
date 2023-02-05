import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

export default function AdminHeader({ handleLogout }) {
  const navigate = useNavigate();
  return (
    <nav className={styles.admin_header}>
      <ul className="flex_between" style={{ width: '450px' }}>
        <li className={styles.admin_logo}>
          <img
            src={require('assets/LogoBlack.png')}
            alt="Logo"
            onClick={() => navigate('/')}
          />
        </li>
        <div className={styles.admin_intro}>
          <p style={{ color: '#D7000D' }}>Zeta &nbsp;</p>
          <p style={{ color: '#2F97DB' }}>Plan &nbsp;</p> Investment 에 오신걸
          환영합니다
        </div>
      </ul>
      <ul className="flex_between" style={{ width: '150px' }}>
        <li>
          <button
            className={`${styles.admin_btn} flex_center`}
            onClick={() => {
              navigate('/admin/write', {
                state: {
                  post: null,
                  category: 0,
                  subCategory: 0,
                  isNew: true,
                },
              });
            }}>
            글쓰기&nbsp;&nbsp;
            <FaPen />
          </button>
        </li>
        <li>
          <button className={styles.admin_btn} onClick={handleLogout}>
            로그아웃
          </button>
        </li>
      </ul>
    </nav>
  );
}
