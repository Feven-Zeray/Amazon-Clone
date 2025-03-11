
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcvK4ZyQcIDia0YYqbqr_ivm9Cj2-87IM",
  authDomain: "clone-d826b.firebaseapp.com",
  projectId: "clone-d826b",
  storageBucket: "clone-d826b.firebasestorage.app",
  messagingSenderId: "1026762126446",
  appId: "1:1026762126446:web:ea61f3e646159cd6c0227f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()