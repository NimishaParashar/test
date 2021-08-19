import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtfAms4B6vHtMqxlN6m3PGYEMFPDfPmUE",
  authDomain: "motion-d4e51.firebaseapp.com",
  projectId: "motion-d4e51",
  storageBucket: "motion-d4e51.appspot.com",
  messagingSenderId: "952067818762",
  appId: "1:952067818762:web:af332a108d71cd71f366f3",
  measurementId: "G-4C4KS5D4S0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
