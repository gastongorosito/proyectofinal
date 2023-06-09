// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6x9MNEQvX_kU3J-fR2fLyvRTw6XlqjEI",
  authDomain: "fdxshop-2f651.firebaseapp.com",
  projectId: "fdxshop-2f651",
  storageBucket: "fdxshop-2f651.appspot.com",
  messagingSenderId: "974401203100",
  appId: "1:974401203100:web:94d4765a1def4717037659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

