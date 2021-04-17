import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCerhWjjNtMwExf08YbiOtpkwTNXkjqMiA",
  authDomain: "todo-5a69d.firebaseapp.com",
  projectId: "todo-5a69d",
  storageBucket: "todo-5a69d.appspot.com",
  messagingSenderId: "757612834070",
  appId: "1:757612834070:web:9f12fc7480a515f04a3437",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
