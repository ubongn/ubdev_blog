// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6c492.firebaseapp.com",
  projectId: "mern-blog-6c492",
  storageBucket: "mern-blog-6c492.appspot.com",
  messagingSenderId: "617039064013",
  appId: "1:617039064013:web:2ae48a132afe0c64c6f284"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);