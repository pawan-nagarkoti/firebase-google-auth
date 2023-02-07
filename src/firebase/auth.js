import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDykHiyaHGDp6-PSMx90cy9ml7DeZSKFgA",
    authDomain: "test-firebase-21148.firebaseapp.com",
    projectId: "test-firebase-21148",
    storageBucket: "test-firebase-21148.appspot.com",
    messagingSenderId: "579705692538",
    appId: "1:579705692538:web:3019d11bcfe0d065abb6c3",
    measurementId: "G-LB2DGJP2GP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();