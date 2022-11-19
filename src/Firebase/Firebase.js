import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdGi1B0owA3agY9mLHr2PU4dQzfTJbx5o",
  authDomain: "notes-app-dbb27.firebaseapp.com",
  projectId: "notes-app-dbb27",
  storageBucket: "notes-app-dbb27.appspot.com",
  messagingSenderId: "526465418147",
  appId: "1:526465418147:web:3a7c000fa3cb5ebd835016",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
