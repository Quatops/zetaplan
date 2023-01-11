import React from 'react';
import { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './styles.module.css';

export default function SignIn() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [capsLockFlag, setCapsLockFlag] = useState(false);

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const checkCapsLock = (e) => {
    let capsLock = e.getModifierState('CapsLock');
    setCapsLockFlag(capsLock);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onLoginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page_background">
      <form className={`${styles.login} flex_center`} onSubmit={onLoginHandler}>
        <div className={styles.logo}>
          <img src={require(`assets/Logo.png`)} />
        </div>
        <div className={styles.input_wrap}>
          <input
            type="text"
            placeholder="아이디를 입력하세요."
            value={Email}
            onChange={onEmailHandler}
            onKeyDown={(e) => checkCapsLock(e)}
            required
          />
        </div>
        <div className={styles.input_wrap}>
          <input
            type="password"
            onKeyDown={(e) => checkCapsLock(e)}
            placeholder="비밀번호를 입력하세요."
            value={Password}
            onChange={onPasswordHandler}
            required
          />
        </div>
        {!isCorrect ? (
          <p className="error">
            <FaExclamationTriangle /> 아이디 또는 비밀번호가 맞지 않습니다.
          </p>
        ) : (
          <p>&nbsp;</p>
        )}
        <span className={capsLockFlag ? 'caps-lock caps-lock-on' : 'caps-lock'}>
          {capsLockFlag ? 'Caps Lock On' : 'Caps Lock Off'}
        </span>{' '}
        {!isCorrect ? (
          <p className="error">
            <FaExclamationTriangle /> 아이디 또는 비밀번호가 맞지 않습니다.
          </p>
        ) : (
          <p>&nbsp;</p>
        )}
        <button className="login-btn">로그인</button>
        <p></p>
      </form>
    </div>
  );
}
