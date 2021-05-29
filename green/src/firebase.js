import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj-MLJXdQaK7tiuCVl9l0UOLP1Aagqh3w",
  authDomain: "green-ride-f6a9e.firebaseapp.com",
  databaseURL:
    "https://green-ride-f6a9e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "green-ride-f6a9e",
  storageBucket: "green-ride-f6a9e.appspot.com",
  messagingSenderId: "723465570432",
  appId: "1:723465570432:web:321575debb3ca9b8b53e65",
  measurementId: "G-84BZTMML3J",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
