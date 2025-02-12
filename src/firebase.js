// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXWpSTVeN5XFS1vU2Hy0bEMyFXXi6BStk",
    authDomain: "deakin-web-app-f5f62.firebaseapp.com",
    projectId: "deakin-web-app-f5f62",
    storageBucket: "deakin-web-app-f5f62.appspot.com",
    messagingSenderId: "572435091908",
    appId: "1:572435091908:web:7e4fb6f5aaf803a340d491",
    measurementId: "G-4QZ99KD65V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();