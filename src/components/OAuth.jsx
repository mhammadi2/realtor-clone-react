// A component for Google signeup in signin page
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user);
      // check for the user
      // check id in collection of Firebase
      const docRef = doc(db, "users", user.id);
      // this return a promise call it docsnap
      const docSnap = await getDoc(docRef);
      // Check if available docref then added to Database)collection)
      if (docSnap.exists()){
        await setDoc(docRef,{
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
         });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize by Google");
      // console.log(error);
    }
  }
  return (
    // Add the button type "button" here so that "submit" type button in "SignUp.jS" can not pop up
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white uppercase py-3 px-7 text-sm font-medium hover:bg-red-800 active:bg-red-50
    shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-4" />
      Continue with Google
    </button>
  );
}

export default OAuth;
