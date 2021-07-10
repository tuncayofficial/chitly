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
   const [value, setValue] = useState("")

   const handleInput = (e) =>{
       setValue(e.target.value)
       localStorage.setItem("status",value)
       console.log(user)
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
               <div className="nickname">Status : {view ? (<input className="statusInput" onChange = {handleInput} />) : localStorage.getItem("status") } <button style = {{ marginLeft : "10px" }} onClick = {handleView}>Change</button></div>
           </fieldset>
       </div>
   )
}

export default Information;