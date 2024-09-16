// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "co-worker-edcd3.firebaseapp.com",
  projectId: "co-worker-edcd3",
  storageBucket: "co-worker-edcd3.appspot.com",
  messagingSenderId: "775519692278",
  appId: "1:775519692278:web:fbfde83baf0e32f09a93d7",
  measurementId: "G-X91VS4CNJ7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
