import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBd5jyvxKmeiw-iWOhyjYlEayGkqwgnW70",
    authDomain: "fir-5801d.firebaseapp.com",
    projectId: "fir-5801d",
    storageBucket: "fir-5801d.appspot.com",
    messagingSenderId: "255840067323",
    appId: "1:255840067323:web:4bf1e9d2e6e88e0578da5e",
    measurementId: "G-XKYPPWBDXK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };