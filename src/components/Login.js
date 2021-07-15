import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useState, useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FcGoogle } from "react-icons/fc"

function Login(props){

      const auth = firebase.auth()
      const firestore = firebase.firestore()

      const signInWithGoogle = () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        localStorage.setItem("logged", true)
      }
      return (
        <div>
          <FcGoogle size = {35} style = {{ cursor : "pointer" }} onClick={signInWithGoogle} />
        </div>
      )
}

export default Login