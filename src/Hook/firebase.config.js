// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOtNTLRntyLHODRGA0E8V1MGI0JN3lBz0",
    authDomain: "news-paper-e1b0e.firebaseapp.com",
    projectId: "news-paper-e1b0e",
    storageBucket: "news-paper-e1b0e.appspot.com",
    messagingSenderId: "448655151389",
    appId: "1:448655151389:web:a299b19f6ab0011e9bd1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;