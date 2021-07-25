import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useRef, useEffect } from "react"

function Information(){
   const auth = firebase.auth()
   const user = auth.currentUser
   var signupDate = new Date(user && user.metadata.creationTime);
   const [view, setView] = useState(false)
   const value = useRef()

   useEffect(() =>{
       console.log(user && user)
   })

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
        <div className="nickname">Nickname : { user && user.displayName }</div>
        <div className="nickname">User ID : { user && user.uid }</div>
        <div className="nickname">Account Creation : { signupDate.toDateString() }</div>
        <div className="nickname">Status : {view ? (<input ref = {value} className="statusInput" />) : localStorage.getItem("status") } <button style = {{ marginLeft : "10px" }} onClick = {handleView}>Change</button></div>
       </div>
       </main>
   )
}

export default Information;