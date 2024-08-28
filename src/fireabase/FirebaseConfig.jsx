// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyB5gpXpxc351tVSdrSvCSWPDBEG5i-KmYc",
  authDomain: "easyshop-cf1a9.firebaseapp.com",
  projectId: "easyshop-cf1a9",
  storageBucket: "easyshop-cf1a9.appspot.com",
  messagingSenderId: "854357112046",
  appId: "1:854357112046:web:4425630d2b40d5ca0e6fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}