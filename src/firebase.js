//firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: 'AIzaSyBVTCO5_OnOlSc0BjYzyYvJ11FUpdED874',
  authDomain: 'zefaplan.firebaseapp.com',
  projectId: 'zefaplan',
  storageBucket: 'zefaplan.appspot.com',
  messagingSenderId: '922878934324',
  appId: '1:922878934324:web:5d4023949799e31384f961',
  measurementId: 'G-HTN6J3VPXZ',
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
//export const firestore = firebase.firestore();

const auth = getAuth(app);
