import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainContactUs() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.info}>
        <p>09:00 - 18:00</p>
        <span className={styles.call_number}>02&#41; 538-4801</span>
        <p>02&#41; 561 - 6698 | 070&#41; 8129 - 5884 | 070&#41; 8129 - 5885</p>
        <span className={styles.email}>zetabiz @ zetaplan.com</span>
      </div>
      <button
        className={styles.cosulting_apply_btn}
        onClick={() => navigate('/consulting')}>
        상담신청
      </button>
    </>
  );
}
