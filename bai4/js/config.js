// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtCSv2QLNXkvimEvSxOGOz8c-02xO7Yqs",
  authDomain: "cuahang-537e0.firebaseapp.com",
  projectId: "cuahang-537e0",
  storageBucket: "cuahang-537e0.appspot.com",
  messagingSenderId: "898884806118",
  appId: "1:898884806118:web:fe075a2605f0d39d2ce227",
  measurementId: "G-LTDN5VQTWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
