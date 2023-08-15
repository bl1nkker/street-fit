// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCUXh3V8mXWOsRD7hTkoXh1vGg-0HeNsyY",
  authDomain: "street-fit-8fa94.firebaseapp.com",
  projectId: "street-fit-8fa94",
  storageBucket: "street-fit-8fa94.appspot.com",
  messagingSenderId: "319118014125",
  appId: "1:319118014125:web:0c222db12177e03074b824",
  measurementId: "G-C2HD60M6JS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
