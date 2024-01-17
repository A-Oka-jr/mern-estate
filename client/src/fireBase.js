// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93269.firebaseapp.com",
  projectId: "mern-estate-93269",
  storageBucket: "mern-estate-93269.appspot.com",
  messagingSenderId: "235016492290",
  appId: "1:235016492290:web:ec7c14ceaf63f22812de1b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
