import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useRef, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { AiFillEdit } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

function Information(){
   const auth = firebase.auth()
   const { user } = useAuth()
   console.log(user)
  // var signupDate = new Date(auth.currentUser.metadata.creationTime);
   const [view, setView] = useState(false)
   const value = useRef()

    const logout = async() =>{
        try {
      await auth.signOut()
      localStorage.setItem("logged", false)
    } catch(err) {
        console.error(err)
    }
 }

   const handleInput = (e) =>{
       localStorage.setItem("status", value.current.value)
   }

   const handleView = () =>{
      setView(prev => !prev)
   }

   return (
        <div className = "dashboard">
           <div className="menudot" style = {{ position : "relative", left : "650px", bottom : "150px" }} align = "left">
              < BsThreeDotsVertical size = {25} />
           </div>
           <div className = "profile-photo" >
              <img style = {{ borderRadius : "100%" }} width = "200px" height = "200px" src = {auth.currentUser && auth.currentUser.photoURL} />
           </div>
           <div className="section2">
              <div className="details">
               <span className="nickname">{auth.currentUser && auth.currentUser.displayName}<AiFillEdit size = {30}/></span>
              </div>
             <button style = {logoutButtonStyle} onClick = {logout}>Log out</button>
           </div>
        </div>
   )
}

const logoutButtonStyle = {
   marginTop : "10px",
   backgroundColor : "red"
}

export default Information;