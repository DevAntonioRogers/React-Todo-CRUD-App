// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmYTBRGTpo8QmzfnirqpUBrGGtSPOiJ_g",
  authDomain: "todo-app-59d7f.firebaseapp.com",
  projectId: "todo-app-59d7f",
  storageBucket: "todo-app-59d7f.appspot.com",
  messagingSenderId: "936209896235",
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
