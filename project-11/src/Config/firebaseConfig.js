import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApVpNtb2B7VyhoDIXRzfuBlSRwL0tun6U",
  authDomain: "bookmyshow-baa96.firebaseapp.com",
  projectId: "bookmyshow-baa96",
  storageBucket: "bookmyshow-baa96.firebasestorage.app",
  messagingSenderId: "851467681912",
  appId: "1:851467681912:web:11683a650cd1df77e4ed8d",
  measurementId: "G-ZQS0LB908W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);