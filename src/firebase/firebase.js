// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGicpipbPDpoRkQcmkSv0qt2Qs9mUEUII",
    authDomain: "winter-clothing-donation-40c9b.firebaseapp.com",
    projectId: "winter-clothing-donation-40c9b",
    storageBucket: "winter-clothing-donation-40c9b.firebasestorage.app",
    messagingSenderId: "871492873232",
    appId: "1:871492873232:web:7cc0b4b9364bf5b801ae95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
