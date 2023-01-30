import React from 'react';
import { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './styles.module.css';
import { FaUser, FaLock, FaBackward, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });
  const [isCorrect, setIsCorrect] = useState(true);
  const { user_login } = useAuthContext();
  const navigate = useNavigate();
  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };
  const onEmailHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onLoginHandler = (e) => {
    e.preventDefault();
    user_login(id, password).then((isLogin) => {
      if (isLogin) {
        navigate('/');
      } else {
        setIsCorrect(false);
      }
    });
  };

  return (
    <div className="page_background flex_center">
      <form className={`${styles.login} flex_center`} onSubmit={onLoginHandler}>
        <div className={styles.logo}>
          <img src={require(`assets/Logo.png`)} alt="logo" />
        </div>
        <div className={styles.input_wrap}>
          <label htmlFor={styles.id}>
            <FaUser />
            <input
              id={styles.id}
              className={styles.input}
              type="text"
              placeholder="아이디를 입력하세요."
              value={id}
              onChange={onEmailHandler}
              required
            />
          </label>
        </div>
        <div className={styles.input_wrap}>
          <label htmlFor="password" className={styles.password_label}>
            <FaLock />
            <input
              id="password"
              className={styles.input}
              type={passwordType.type}
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={onPasswordHandler}
              required
            />{' '}
            <span className={styles.isVisible} onClick={handlePasswordType}>
              {passwordType.visible ? (
                <span>
                  <FaEyeSlash />
                </span>
              ) : (
                <span>
                  <FaEye />
                </span>
              )}
            </span>{' '}
          </label>
        </div>
        <span className={styles.error}>
          {!isCorrect && (
            <>
              <FaExclamationTriangle /> 아이디 또는 비밀번호가 맞지 않습니다.
            </>
          )}
        </span>
        <button className={styles.login_btn}>로그인</button>
        <div
          className={`${styles.back_btn} flex_center`}
          onClick={() => navigate('/')}>
          <FaBackward /> &nbsp;&nbsp;제타플랜 돌아가기
        </div>
      </form>
    </div>
  );
}
