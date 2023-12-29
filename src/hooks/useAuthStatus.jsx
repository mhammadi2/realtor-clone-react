import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'


export function useAuthStatus() {
    const [ loggedIn, setLoggedIn] = useState(false);
    // Suppose new person is new checking
    const [checkingStatus, setCheckingStatus] = useState(true)
    // use  the folowing to check user is exist or not

    useEffect (()=> {
        const auth= getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        })
    },[])
  return { loggedIn, checkingStatus};
}

