// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1d9K_-4RvfozdXBSchX1rUMUmz5V8xaE",
  authDomain: "tarea-87147.firebaseapp.com",
  projectId: "tarea-87147",
  storageBucket: "tarea-87147.appspot.com",
  messagingSenderId: "85262403959",
  appId: "1:85262403959:web:f23fa4939ad47a3387f972",
  measurementId: "G-EBVQHFH07R"
};

initializeApp(firebaseConfig);

export const database = getFirestore()

// Initialize Firebase
/*
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
