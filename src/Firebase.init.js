// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4lKdgVb8psVKuHcROi2MYUrR52QP7SGw",
  authDomain: "simple-firebase-auth-c89e1.firebaseapp.com",
  projectId: "simple-firebase-auth-c89e1",
  storageBucket: "simple-firebase-auth-c89e1.appspot.com",
  messagingSenderId: "581852759435",
  appId: "1:581852759435:web:9cf6f109a36f5594231b8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;