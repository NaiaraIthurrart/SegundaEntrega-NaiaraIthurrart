// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3A4GW87t3TuM_ABULp3CX4yJHyf25edc",
  authDomain: "crudcoder39535-2f947.firebaseapp.com",
  projectId: "crudcoder39535-2f947",
  storageBucket: "crudcoder39535-2f947.appspot.com",
  messagingSenderId: "853681247724",
  appId: "1:853681247724:web:e7af7ba3ae4303caac9cc9",
  measurementId: "G-474ERFHRW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
