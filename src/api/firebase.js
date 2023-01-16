//firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

// 관리자 로그인
export async function loginAdmin(email, password) {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (e) {
    return e.message.replace('Firebase: Error ', '');
  }
}

// 관리자 로그아웃
export async function logoutAdmin() {
  await signOut(authService);
  return;
}
export async function addNewPost(post) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...post,
    id,
    image,
  });
}
