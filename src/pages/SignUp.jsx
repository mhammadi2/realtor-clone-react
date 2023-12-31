import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import {Link} from "react-router-dom";
import OAuth from "../components/OAuth";
import {getAuth, createUserWithEmailAndPassword,  updateProfile,} from "firebase/auth"
import {db} from "../firebase"

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// adding package for notificati on thorugh Toastify 
import {toast} from "react-toastify";

function SignUp() {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });



  const {name, email, password } = formData;
  //  console.log(name)
  // function for email and input data for sign in
  // Initialize the useNavigate function  as follows
  const  navigate = useNavigate();

  function onChange(e) {
    // console.log(e.target.value);
    // Whatever we typed saved in formdata can be checked using  brwoser developer tool
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  // Function for submit a form after creating database and storage in Google Firebase.
  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential =  await createUserWithEmailAndPassword(
      auth,
      email,
      password);
      
      updateProfile(auth.currentUser, {
            displayName:name,
          });
      
      const user = userCredential.user;
      const formDataCopy = {...formData};
      delete  formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

          // adding a user in the Database as follows:
        await setDoc(doc(db, "users", user.uid), formDataCopy);
      // add a "users" collection
      // console.log(user);
      toast.success("Sign up was successfull");
      navigate("/");
    } catch (error) {
      // console.log(error); Adding notification using react  toastify as follows:
      toast.error("Something went wrong");
    }

  }
   

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold "> Sign Up </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%]  lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lnbiUyMHVwfGVufDB8fDB8fHww"
            alt="Sign In"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out mb-6"
            />
            <input
              className="w-full"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 text-xl text-gray-700
               bg-white border-gray-300 rounded transition ease-in-out mb-6"
            />
            <div className="relative mb-6">
            <input
              className="w-full"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              className="w-full px-4 py-2 text-xl text-gray-700
               bg-white border-gray-300 rounded transition ease-in-out "
            />
            {showPassword ? (
              <IoMdEyeOff className="absolute right-3 top-3 text-xl cursor-pointer"
              onClick={()=> setShowPassword
              ((prevState) => !prevState)}/>
            ):(
              <IoMdEye className="absolute right-3 top-3 text-xl cursor-pointer"
              onClick={()=> setShowPassword
                ((prevState) => !prevState)}/>
            )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6"> Have a account?

              <Link to="/sign-in" className="text-red-600 hover:text-red-700 
              transition duration-200 ease-in-out ml-1">Sign in</Link>
              </p>
              <p>

              <Link to="/forgot-password " className="text-blue-600 hover:text-blue-50-800 
              transition duration-200 ease-in-out">Forgot-password</Link>
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm 
          font-medium uppercase rounded shadow-md hover:bg-blue-700 
          transition duration-150 ease-in-out hover:shadow-lg
           active:bg-blue-800" type="submit">
             Sign Up
             </button>

           <div className="my-4 before:border-t flex before:flex-1
            items-center before:border-gray-500 after:border-t flex after:flex-1 
            items-center after:border-gray-500">
            <p className="text-center font-semibold mx-4">Or</p>
           </div>

           <OAuth/>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default SignUp;
