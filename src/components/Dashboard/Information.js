import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useRef } from "react"

function Information(){
   const auth = firebase.auth()
   const user = auth.currentUser
   const [view, setView] = useState(false)
   const value = useRef()

   const handleInput = (e) =>{
       localStorage.setItem("status", value.current.value)
   }

   const handleView = () =>{
      setView(prev => !prev)
   }

   return (
       <div className = "profile">
           <fieldset>
               <legend>Profile information</legend>
               <div className="nickname">Nickname : { user && user.displayName }</div>
               <div className="nickname">User ID : { user && user.uid }</div>
               <div className="nickname">Status : {view ? (<input ref = {value} className="statusInput" />) : localStorage.getItem("status") } <button style = {{ marginLeft : "10px" }} onClick = {handleView}>Change</button></div>
           </fieldset>
       </div>
   )
}

export default Information;