// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAunW2gq_lfuF2czKmX0O_rLgmVS3C1L-o",
  authDomain: "groovy-groove-268003.firebaseapp.com",
  databaseURL: "https://groovy-groove-268003.firebaseio.com",
  projectId: "groovy-groove-268003",
  storageBucket: "groovy-groove-268003.appspot.com",
  messagingSenderId: "702853176491",
  appId: "1:702853176491:web:9fc67de6fcf6034b04abee",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
