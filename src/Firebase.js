// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkXj0cpux47Kara0CghQh1wt9NDCb8BCI",
  authDomain: "liberika-academy-web.firebaseapp.com",
  projectId: "liberika-academy-web",
  storageBucket: "liberika-academy-web.appspot.com",
  messagingSenderId: "593766242011",
  appId: "1:593766242011:web:47de168a8b1ced7199defe",
  measurementId: "G-DMVWFPJW87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);