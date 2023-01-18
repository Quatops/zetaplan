//firebase.js
import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';

import { getDatabase, ref, set, get } from 'firebase/database';
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

export async function addNewPost(content, info) {
  const { cate, subCate, path } = info;
  const id = uuid();
  return set(ref(database, `posts/${id}`), {
    content,
    id,
    cate,
    subCate,
    path,
    writer: 'admin',
    date: moment(new Date()).format('YYYY-MM-DD'),
  });
}

export async function getPost() {
  return get(ref(database, 'posts')).then((snapshot) => {
    if (snapshot.exist) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
