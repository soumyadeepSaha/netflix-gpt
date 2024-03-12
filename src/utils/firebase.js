// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC12W1ZzqI2dIv9V8bZSqWBe-uxwWtwuU",
  authDomain: "netflixgpt-24e39.firebaseapp.com",
  projectId: "netflixgpt-24e39",
  storageBucket: "netflixgpt-24e39.appspot.com",
  messagingSenderId: "75080923012",
  appId: "1:75080923012:web:ded66333a365188f2d8fd1",
  measurementId: "G-YPCWLVTZL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();