// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYLM1Dn5JchEcoBy8zTC3sxlFaHy3e-6A",
  authDomain: "budget-planner-e6fd2.firebaseapp.com",
  projectId: "budget-planner-e6fd2",
  storageBucket: "budget-planner-e6fd2.appspot.com",
  messagingSenderId: "512496114696",
  appId: "1:512496114696:web:dd6753d94a07810dd185bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
