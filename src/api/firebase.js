//firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from 'firebase/database';
import { v4 as uuid } from 'uuid';
var moment = require('moment');

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// 게시글 관련
export async function addNewPost(content, info) {
  const { cate, subCate, id } = info;
  return set(ref(database, `posts/${id}`), {
    content,
    id,
    cate,
    subCate,
    writer: 'admin',
    date: moment(new Date()).format('YYYY-MM-DD'),
  });
}

export async function getPost(id) {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `posts/` + id)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return [];
  });
}

/*export async function getPost() {
  return get(ref(database, `posts`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}*/

export async function updatePost(content, info) {
  const { cate, subCate, id } = info;
  const updateObj = {};
  updateObj['/posts/' + id] = {
    content,
    id,
    cate,
    subCate,
    writer: 'admin',
    date: moment(new Date()).format('YYYY-MM-DD'),
  };
  return update(ref(database), updateObj);
}

export async function deletePost(id) {
  const dbRef = ref(getDatabase());
  remove(child(dbRef, 'posts/' + id));
  window.location.reload();
}

// 유저 관련
export async function login(id, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, id, password);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function logout() {
  return signOut(auth).then(() => null);
}

async function adminUser(user) {
  // 사용자가 어드민 권한을 가지고 있는지 확인. isAdmin : true
  return get(ref(database, 'admin')).then((snapshot) => {
    if (snapshot.exists()) {
      const admin = snapshot.val();
      const isAdmin = admin.includes(user.uid);
      return { ...user, isAdmin };
    }
  });
}
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

//Get
export async function getItems(target) {
  return get(ref(database, target)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

//Update
export async function updateItems(target, items) {
  console.log('여기오나?');
  const updateObj = {};
  updateObj[target] = items;
  return update(ref(database), updateObj);
}
export async function updateSubCate(target, items) {
  const menu = {
    title: items.title,
    path: items.path,
    id: items.id,
  };
  const updateObj = {};
  updateObj[target + `/${items.cate}/${items.subCate}`] = menu;
  return update(ref(database), updateObj);
}

// 카테고리 추가하기
export async function addNewSubCate(item) {
  const { path, title, cate, id } = item;
  const now = uuid();
  return set(ref(database, `sub_nav/${cate}/${id}`), {
    id: now,
    path,
    title,
  });
}
