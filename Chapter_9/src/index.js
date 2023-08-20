import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



var config = {
  apiKey: "AIzaSyAyzOM04_YdHDnD2qHkS8bYcVIz2-VMpGA",
  authDomain: "chapter9-5ee23.firebaseapp.com",
  projectId: "chapter9-5ee23",
  storageBucket: "chapter9-5ee23.appspot.com",
  messagingSenderId: "1037124581890",
  appId: "1:1037124581890:web:5489e1540d8c5a0a23c51b",
  measurementId: "G-DK7EZQN74P"
};
firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
