// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEhLUXx78LrkDrR3MUpPnQf1keqYprE-I",
  authDomain: "e-commerce-e95b2.firebaseapp.com",
  projectId: "e-commerce-e95b2",
  storageBucket: "e-commerce-e95b2.appspot.com",
  messagingSenderId: "713865972553",
  appId: "1:713865972553:web:4f443b5e88bd043321e898",
  measurementId: "G-MG6ZLXWN83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)