import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOBJfIqkOons71Fz5jNBLgiIWlEw99ZcM",
    authDomain: "resume-auth-57bca.firebaseapp.com",
    projectId: "resume-auth-57bca",
    storageBucket: "resume-auth-57bca.appspot.com",
    messagingSenderId: "466594809628",
    appId: "1:466594809628:web:9a9cc51d3dd111f1789cd9",
    measurementId: "G-EG1G4VV64X"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () =>{
    auth.signInWithPopup(provider);
}

export const firestore = firebase.firestore();

