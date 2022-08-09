import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq9k5AFS0w8t8Q2n0tKzG84w4DHacoR5Q",
  authDomain: "house-marketplace-app-47562.firebaseapp.com",
  projectId: "house-marketplace-app-47562",
  storageBucket: "house-marketplace-app-47562.appspot.com",
  messagingSenderId: "5362404530",
  appId: "1:5362404530:web:e599dc5814c83f2b7e0dab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
