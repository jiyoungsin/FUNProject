// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from '@firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHW5iQNJYsWnnMCSZ4rfew1zBHtbDivXI",
    authDomain: "funprj.firebaseapp.com",
    projectId: "funprj",
    storageBucket: "funprj.appspot.com",
    messagingSenderId: "724426407442",
    appId: "1:724426407442:web:9c3c8af9a2613548ec22cb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth is the identifier
const auth = getAuth(app);
// db is the data base.
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db, storage };