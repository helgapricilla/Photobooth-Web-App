// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHUTOFA0eq5fc66M7Nc7hYPtra5MxFDk",
  authDomain: "photobooth-web.firebaseapp.com",
  projectId: "photobooth-web",
  storageBucket: "photobooth-web.appspot.com",
  messagingSenderId: "799962056233",
  appId: "1:799962056233:web:7676eacb85929869677e38",
  measurementId: "G-LENNP2S640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app;