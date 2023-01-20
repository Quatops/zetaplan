import ToggleUI from 'components/PostUIs/ToggleUI';
import React from 'react';
import styles from './styles.module.css';

export default function PostUICard({ id }) {
  return (
    <div className={styles.card_wrap}>
      이것들은 ui 컴포넌트들입니다 {id}번입니다.
      <div className={styles.content_wrap}>
        <ToggleUI>안녕하세요</ToggleUI>
      </div>
    </div>
  );

  // 그래서 여기다가 ui목록들을 임포트시켜놓고, 사용자가 클릭한 id랑 똑같으면 그친구를 옆에다가 추가하는 방식으로?
  // 어차피 자유자재로 추가할수있도록 하는게 나을듯.
  // 그러고 웹사이트에서는 그 컴포넌트가 포함된 것을 보여주는거지.

  // 이거갠찮당 ㅎㅎ

  // 이미지로 말머리 기호따는것도 가능할것같은게,
  // 이미지 업로드한다음에 서버에서 그 이미지 url을 불러와서
  // 그 이미지 url을 컴포넌트에 넣고, (props로 받아서)
  // 그다음 여기 body에다가 추가해주면 되지않을까?
  // 디폴트로는 원래있던 그거를 넣어주고, 아니면 사용자가 지정해서 넣어주고...
  // 그런식으로 넣을수있을것같고, 아니면 html을 추가해서 자기들이 폼을 custom할수도있게끔
  // 만들어보면 추후 확장성도 있겠고.
  // 그러고 그거 레이아웃 저장형태를 db에다가 저장하든말든.. ㅎㅎ

  //이미지도 됐으니까 한번 더 생각해보자면,

  // 카드형식 레이아웃도 사실상 그냥 ... 그걸로 하면 될것같긴한데. 이것처럼 레이아웃 형식을 따서.
  // 폼을 따서 하면 될것같은데 그건 무리려나?사진을넣는게 애매해서?몰?루
}
