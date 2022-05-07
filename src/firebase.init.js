// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYPmlPKvke-hUrH6WxM0JGHxH0eAfZakk",
  authDomain: "full-stack-11.firebaseapp.com",
  projectId: "full-stack-11",
  storageBucket: "full-stack-11.appspot.com",
  messagingSenderId: "824134863194",
  appId: "1:824134863194:web:d6bd33489ea6f8a9420b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;