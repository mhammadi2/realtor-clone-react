import React from 'react'
import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import { useEffect } from "react";
import ListingItem from "../components/ListingItem";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false)
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState( {
    name: auth.currentUser.name,
    email:auth.currentUser.email,
  });

  const {name, email} = formData;

  function onLogout(){
    auth.signOut()
    navigate("/")

  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore
        // First need to create docstore with collection name users.

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }
  // useEffect(() => {
  //   async function fetchUserListings() {
  //     const listingRef = collection(db, "listings");
  //     const q = query(
  //       listingRef,
  //       where("userRef", "==", auth.currentUser.uid),
  //       orderBy("timestamp", "desc")
  //     );
  //     const querySnap = await getDocs(q);
  //     let listings = [];
  //     querySnap.forEach((doc) => {
  //       return listings.push({
  //         id: doc.id,
  //         data: doc.data(),
  //       });
  //     });
  //     setListings(listings);
  //     setLoading(false);
  //   }
  //   fetchUserListings();
  // }, [auth.currentUser.uid]);
  // async function onDelete(listingID) {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     await deleteDoc(doc(db, "listings", listingID));
  //     const updatedListings = listings.filter(
  //       (listing) => listing.id !== listingID
  //     );
  //     setListings(updatedListings);
  //     toast.success("Successfully deleted the listing");
  //   }
  // }
  // function onEdit(listingID) {
  //   navigate(`/edit-listing/${listingID}`);
  // }

  return (
    <>
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col ">
      <h1 className="text-center text-3xl mt-6 font-bold"> My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3">
        <form>
          {/* Input Name */}
          <input 
          type="text" 
          id="name"
          value={name} 
          disabled={changeDetail}
          onChange={onChange}
          // if the changgDetail is true then chang ethe backgron color to red
          className={`mb-6 w-full px-4 py-2 text-xl text-gray-700
           bg-white border border-gray-300 rounded transition ease-in-out 
           ${changeDetail && "bg-red-200 focus:bg-red-200"
             }`} />
           
           {/* Email Input */}
          <input 
          type="email" 
          id ="email" 
          value={email} 
          disabled 
          
          className="w-full px-4 py-2 text-x1 text-gray-700
           bg-white border border-gray-300 rounded transition ease-in-out" />
           <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6" >
           <p className="flex items-center">

           Do you want to change your name?
           <span
                  onClick={() => {
                      // if change detail is true the submit form
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
    
                </span>
           </p> 
            <p 
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 
                transition duration-200 ease-in-out cursor-pointer">
            Sign out
            </p>
           </div>
        </form>
      </div>
    </section>
    </>
);
}
export default Profile