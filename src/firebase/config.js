// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqKvEfPJ3y5xE_AOH8LEJpKuSAZlDHBDo",
  authDomain: "elcondecomputacion.firebaseapp.com",
  projectId: "elcondecomputacion",
  storageBucket: "elcondecomputacion.appspot.com",
  messagingSenderId: "1085455908240",
  appId: "1:1085455908240:web:055fe44dc61dfb0fd24715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


