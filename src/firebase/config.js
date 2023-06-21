// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDfiEjK7le0ZY0sOlfTz2JdIfAzs14YEFs",
authDomain: "elconde-f4505.firebaseapp.com",
projectId: "elconde-f4505",
storageBucket: "elconde-f4505.appspot.com",
messagingSenderId: "1094798804915",
appId: "1:1094798804915:web:16e4dc526668012685edc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()



