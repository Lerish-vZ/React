import React, { Component } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyzOM04_YdHDnD2qHkS8bYcVIz2-VMpGA",
  authDomain: "chapter9-5ee23.firebaseapp.com",
  projectId: "chapter9-5ee23",
  storageBucket: "chapter9-5ee23.appspot.com",
  messagingSenderId: "1037124581890",
  appId: "1:1037124581890:web:5489e1540d8c5a0a23c51b",
  measurementId: "G-DK7EZQN74P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
  constructor() {
    super();
    console.log(app);
  }
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}
export default App;
