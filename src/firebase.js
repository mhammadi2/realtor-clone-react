// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8W47YwSrdd22dijJ3so3s_7uehRQITfY",
  authDomain: "realtor2-6cbca.firebaseapp.com",
  projectId: "realtor2-6cbca",
  storageBucket: "realtor2-6cbca.appspot.com",
  messagingSenderId: "789997564177",
  appId: "1:789997564177:web:2eb867d32db36d2a689cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();




// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDntlC8yz1zIs5IINZMP9cVrupx0tcZraM",
//   authDomain: "realtor-clone-react-82a5d.firebaseapp.com",
//   projectId: "realtor-clone-react-82a5d",
//   storageBucket: "realtor-clone-react-82a5d.appspot.com",
//   messagingSenderId: "426850226340",
//   appId: "1:426850226340:web:f95673c41a2d29eed89631"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
// export const db = getFirestore();