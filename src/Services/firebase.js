// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA87hHGfpy2_JmDWM7xgVzLnR3oYMuOUdw",
authDomain: "compupartes-e3ac7.firebaseapp.com",
projectId: "compupartes-e3ac7",
storageBucket: "compupartes-e3ac7.appspot.com",
messagingSenderId: "46183137593",
appId: "1:46183137593:web:8c3d16624cbbfb275de8e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)