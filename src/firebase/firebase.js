import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPIKWMu1GVeXCEFCURyayxbwSWiVR7sKA",
  authDomain: "mukam-my-instagram.firebaseapp.com",
  projectId: "mukam-my-instagram",
  storageBucket: "mukam-my-instagram.appspot.com",
  messagingSenderId: "885614199479",
  appId: "1:885614199479:web:7ad3085c01e979e7dbc332",
  measurementId: "G-3PFS48SXNK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
