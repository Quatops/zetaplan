import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainContactUs({ contact_us }) {
  const navigate = useNavigate();
  console.log(contact_us);

  return (
    <>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.info}>
        <p>{contact_us[3]}</p>
        <span className={styles.call_number}>{contact_us[1]}</span>
        <p>{contact_us[2]}</p>
        <span className={styles.email}>{contact_us[0]}</span>
      </div>
      <button
        className={styles.cosulting_apply_btn}
        onClick={() => navigate('/consulting')}>
        상담신청
      </button>
    </>
  );
}
