import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDocs , deleteDoc,doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-cTxlFBrFylN-pBhiU6AqF2G28ZXkRB0",
  authDomain: "form-d3cbe.firebaseapp.com",
  projectId: "form-d3cbe",
  storageBucket: "form-d3cbe.appspot.com",
  messagingSenderId: "191835058931",
  appId: "1:191835058931:web:9646ef932eb37965bcbd86",
  measurementId: "G-B13VYH5FMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db,addDoc,collection,getDocs,deleteDoc,doc}