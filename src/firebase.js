// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDntlC8yz1zIs5IINZMP9cVrupx0tcZraM",
  authDomain: "realtor-clone-react-82a5d.firebaseapp.com",
  projectId: "realtor-clone-react-82a5d",
  storageBucket: "realtor-clone-react-82a5d.appspot.com",
  messagingSenderId: "426850226340",
  appId: "1:426850226340:web:f95673c41a2d29eed89631"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();