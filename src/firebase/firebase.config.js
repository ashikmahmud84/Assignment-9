// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH2mrWutXZkvhliO_fF5mtxcSp0wwH3-0",
  authDomain: "lotus-game.firebaseapp.com",
  projectId: "lotus-game",
  storageBucket: "lotus-game.firebasestorage.app",
  messagingSenderId: "218691819110",
  appId: "1:218691819110:web:28de59f7239829adf4ffa7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;