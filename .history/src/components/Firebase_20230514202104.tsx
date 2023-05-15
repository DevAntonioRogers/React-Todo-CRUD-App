// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env,
  authDomain: "todo-app-59d7f.firebaseapp.com",
  projectId: "todo-app-59d7f",
  storageBucket: "todo-app-59d7f.appspot.com",
  messagingSenderId: "936209896235",
  appId: "1:936209896235:web:dac5c72f828ad6dbb82b6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
