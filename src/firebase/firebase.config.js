
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy2f04hA8CFeRNswc-AD-l43bc5E3lkxQ",
  authDomain: "test-1-8d5b9.firebaseapp.com",
  projectId: "test-1-8d5b9",
  storageBucket: "test-1-8d5b9.appspot.com",
  messagingSenderId: "25018394655",
  appId: "1:25018394655:web:f9c5d71b9ebc729e708d2a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);