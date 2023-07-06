import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA370KYvrDZjpX4_4krKLTMzr0BgJXJ3ec',
  authDomain: 'todo-app-905e4.firebaseapp.com',
  projectId: 'todo-app-905e4',
  storageBucket: 'todo-app-905e4.appspot.com',
  messagingSenderId: '1039040208465',
  appId: '1:1039040208465:web:e253121f5ba48c9b952270',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
