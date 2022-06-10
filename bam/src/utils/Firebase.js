// Real time data base url - https://console.firebase.google.com/u/0/project/bam-capstone/database/bam-capstone-default-rtdb/data/~2F
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsiLTIBmDCPGnIArqsQpqBc0a8AtCdE6Y",
    authDomain: "bam-capstone.firebaseapp.com",
    projectId: "bam-capstone",
    storageBucket: "bam-capstone.appspot.com",
    messagingSenderId: "614912179148",
    appId: "1:614912179148:web:a227950337b730df40bb69",
    measurementId: "G-HKXWVGHBWX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
