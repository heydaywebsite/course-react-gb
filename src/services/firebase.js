//https://console.firebase.google.com/u/2/project/bee-chat-15b0e/overview
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjk9TkVsgwuFQOcXRQkw1YBpcwX0VeCGs",
  authDomain: "bee-chat-15b0e.firebaseapp.com",
  databaseURL:
    "https://bee-chat-15b0e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bee-chat-15b0e",
  storageBucket: "bee-chat-15b0e.appspot.com",
  messagingSenderId: "774152037270",
  appId: "1:774152037270:web:bb500090cea2b7cdcd73b7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
