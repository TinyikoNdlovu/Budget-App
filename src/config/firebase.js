// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCJeDsjkzPUKB8O6ihmxJR8lJM6--gGQ2s",
  authDomain: "budget-app-e4edd.firebaseapp.com",
  projectId: "budget-app-e4edd",
  storageBucket: "budget-app-e4edd.appspot.com",
  messagingSenderId: "611367593467",
  appId: "1:611367593467:web:995b25a2cc6cc06c05175e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};