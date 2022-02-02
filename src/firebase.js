import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAco-vbOs7w7bp0hqbxBIDbyxprV7SNBb4",
  authDomain: "facebook-messenger-clone-ff992.firebaseapp.com",
  projectId: "facebook-messenger-clone-ff992",
  storageBucket: "facebook-messenger-clone-ff992.appspot.com",
  messagingSenderId: "198824138715",
  appId: "1:198824138715:web:a6275d4f28bc7f8da439fe",
});

const db = firebaseApp.firestore();

export default db;
