import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN9HSYikda0JtR0k2dN6gZ0EKgvBaiQOs",
  authDomain: "tinder-clone-cf9f9.firebaseapp.com",
  databaseURL: "https://tinder-clone-cf9f9.firebaseio.com",
  projectId: "tinder-clone-cf9f9",
  storageBucket: "tinder-clone-cf9f9.appspot.com",
  messagingSenderId: "131467862573",
  appId: "1:131467862573:web:48167ecb588787bc6d0ea4",
  measurementId: "G-ZE6VYF100M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
