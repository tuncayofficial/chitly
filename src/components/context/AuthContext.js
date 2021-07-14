import { createContext, useContext } from "react"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useEffect } from "react";

const Authentication = createContext()
export function useAuth(){
    return useContext(Authentication)
}

const AuthProvider = ({ children }) => {
    

    const auth = firebase.auth()
    const [user, setUser] = useState({})

   async function register(email, password){
     await auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
       const unsub = auth.onAuthStateChanged(user => {
           setUser(user)
       })

       return unsub
    })

    const value = {
        user,
        login,
        register
    }

    return (
    <Authentication.Provider value = {value}>
        {children}
    </Authentication.Provider>
    )
}

export default AuthProvider