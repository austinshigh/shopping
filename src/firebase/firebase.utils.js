import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9hnzPdEuCUE1BS2Su1Pm_xLZ5b4r0YCw",
    authDomain: "storefront-dfe37.firebaseapp.com",
    projectId: "storefront-dfe37",
    storageBucket: "storefront-dfe37.appspot.com",
    messagingSenderId: "719230128073",
    appId: "1:719230128073:web:0977a16264f2f310bd6218"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default signInWithGoogle;