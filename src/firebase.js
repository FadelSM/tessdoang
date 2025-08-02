// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
apikey: "AIzaSyAzgwqqzdY3ScftCHuqZ4VE@a3DL5k6ZXU",
authDomain: "tessdo-479d5.firebaseapp.com",
projectid: "tessdo-479d5",
storageBucket: "tessdo-479d5.firebasestorage.app",
messagingSenderId: "59813273159",
appId: "1:59813273159: web: 8aa507d374ccc5afecdb62"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
