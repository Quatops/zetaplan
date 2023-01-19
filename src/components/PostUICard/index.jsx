import React from 'react';
import styles from './styles.module.css';

export default function PostUICard({ id }) {
  return (
    <div className={styles.card_wrap}>
      이것들은 ui 컴포넌트들입니다 {id}번입니다.
    </div>
  );

  // 그래서 여기다가 ui목록들을 임포트시켜놓고, 사용자가 클릭한 id랑 똑같으면 그친구를 옆에다가 추가하는 방식으로?
  // 어차피 자유자재로 추가할수있도록 하는게 나을듯.
  // 그러고 웹사이트에서는 그 컴포넌트가 포함된 것을 보여주는거지.

  // 이거갠찮당 ㅎㅎ
}
