import { createContext, useContext } from "react"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Authentication = createContext()
export function useAuth(){
    return useContext(Authentication)
}

const AuthProvider = ({ children }) => {
    

    const auth = firebase.auth()
    const [user, setUser] = useState({})
    const [error, setError] = useState()

   async function register(email, password, nickname){
     await auth.createUserWithEmailAndPassword(email, password)
     .then(async function () {
        const update = {
            displayName: nickname,
            photoURL: 'https://my-cdn.com/assets/user/123.png',
          };
          
          await firebase.auth().currentUser.updateProfile(update);
      })
    }

    function login(email, password){
        auth.signInWithEmailAndPassword(email, password)

        .catch(error =>{
            // eslint-disable-next-line default-case
            setError(error.message)
            }
        )
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
        register,
        error
    }

    return (
    <Authentication.Provider value = {value}>
        {children}
    </Authentication.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.any
};

export default AuthProvider