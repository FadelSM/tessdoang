// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4jA0xuYyz@p6R79guBPAY1Y1S8yFmpNc",
authDomain: "project-web-kelas-cepuluh. firebaseapp.com",
projectId: "project-web-kelas-cepuluh",
storageBucket: "project-web-kelas-cepuluh.firebasestorage.app",
messagingSenderId: "815388087679",
appId: "1:815380087679:web:efdb@c91b8f80ad3b3d04a"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();