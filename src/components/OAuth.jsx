// A component for Google signeup in signin page
import React from 'react'
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white uppercase py-3 px-7 text-sm font-medium hover:bg-red-800 active:bg-red-50
    shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded"> 
        
        <FcGoogle className="text-2xl bg-white rounded-full mr-4"/>
        Continue 
        with Google</button>
  )
}

export default OAuth