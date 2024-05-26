// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add this line

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAier6M7n0brZZtGsYQMkePSMcrxTiTYSg",
  authDomain: "primary-school-8d3f3.firebaseapp.com",
  projectId: "primary-school-8d3f3",
  storageBucket: "primary-school-8d3f3.appspot.com",
  messagingSenderId: "1064901089843",
  appId: "1:1064901089843:web:ac55b03ffd795b1e706146",
  measurementId: "G-VTX9P55C23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Add this line

export { db }; // Add this line