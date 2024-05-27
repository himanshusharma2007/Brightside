// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Add this line for Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAier6M7n0brZZtGsYQMkePSMcrxTiTYSg",
  authDomain: "primary-school-8d3f3.firebaseapp.com",
  projectId: "primary-school-8d3f3",
  storageBucket: "primary-school-8d3f3.appspot.com",
  messagingSenderId: "1064901089843",
  appId: "1:1064901089843:web:ac55b03ffd795b1e706146",
  measurementId: "G-VTX9P55C23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // Add this line for Auth

export { db, auth }; // Export auth as well
