// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth ,createUserWithEmailAndPassword  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAaigT4WKdIKRqYEfQoacd-Uw9li00qAM",
  authDomain: "ticket-46038.firebaseapp.com",
  projectId: "ticket-46038",
  storageBucket: "ticket-46038.appspot.com",
  messagingSenderId: "387799819778",
  appId: "1:387799819778:web:c5fdb4884a68476e41291b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
const database = getDatabase(app);
export { database ,createUserWithEmailAndPassword  };
