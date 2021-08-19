import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useRef, useEffect } from "react"
import { useAuth } from "../context/AuthContext"

function Information(){
   const auth = firebase.auth()
   const { user } = useAuth()
   console.log(user)
  // var signupDate = new Date(auth.currentUser.metadata.creationTime);
   const [view, setView] = useState(false)
   const value = useRef()

   const handleInput = (e) =>{
       localStorage.setItem("status", value.current.value)
   }

   const handleView = () =>{
      setView(prev => !prev)
   }

   return (
        <main>
        <div className="profile-header">
               Account Information
        </div>
        <div className = "profile">
        <div className="nickname">Nickname : { auth.currentUser && auth.currentUser.displayName }</div>
        <div className="nickname">User ID : { user && user.uid }</div>
        <div className="nickname">Status : {view ? (<input ref = {value} className="statusInput" />) : localStorage.getItem("status") } <button style = {{ marginLeft : "10px" }} onClick = {handleView}>Change</button></div>
       </div>
       </main>
   )
}

export default Information;