import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, "users", `${userAuth.uid}`)
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc((userRef), {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
     }
    return userRef;
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default signInWithGoogle;