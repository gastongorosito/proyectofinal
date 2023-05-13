// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChsZc6KGb39WNyAGhNGMDrXy9vGjb2QpE",
  authDomain: "fdx-shop.firebaseapp.com",
  projectId: "fdx-shop",
  storageBucket: "fdx-shop.appspot.com",
  messagingSenderId: "371904164257",
  appId: "1:371904164257:web:dfe66468b8a63c9cb19be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
