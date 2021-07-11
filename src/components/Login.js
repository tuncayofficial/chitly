import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useState, useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Login(props){

      const auth = firebase.auth()
      const firestore = firebase.firestore()

      const signInWithGoogle = () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        localStorage.setItem("logged", true)
      }
      return (
        <div>
          <button onClick={signInWithGoogle}>Sign In</button>
        </div>
      )
}

export default Login