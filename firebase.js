// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBasFApX0Rp4QAjUmfqOxN3JwPrf1rdXkY",
  authDomain: "meet-landing-page.firebaseapp.com",
  projectId: "meet-landing-page",
  storageBucket: "meet-landing-page.appspot.com",
  messagingSenderId: "647379811190",
  appId: "1:647379811190:web:531e31afb6d3cff65cd857",
  measurementId: "G-D5EMSQECLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);