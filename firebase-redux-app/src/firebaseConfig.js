// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv5uK5lWejhOt4fC6F2JTz21QpTdE3HB0",
  authDomain: "react-10am-dc8b7.firebaseapp.com",
  projectId: "react-10am-dc8b7",
  storageBucket: "react-10am-dc8b7.firebasestorage.app",
  messagingSenderId: "819720730075",
  appId: "1:819720730075:web:9e9abcc1b97a09b85f63fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);