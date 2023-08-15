import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import firebase from "firebase/app";
// import "firebase/auth"; // Import other Firebase services you need
// import { firebaseConfig } from "./firebaseConfig"; // Path to your firebaseConfig

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
