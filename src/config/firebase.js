// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDx2VQjKEusZdKk5CS4r6LNzOtiowgmFV8",
  authDomain: "budget-app-deacf.firebaseapp.com",
  projectId: "budget-app-deacf",
  storageBucket: "budget-app-deacf.appspot.com",
  messagingSenderId: "736183310405",
  appId: "1:736183310405:web:e6ae63fc86febbe3862b2c",
  measurementId: "G-XXPXNF129T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};