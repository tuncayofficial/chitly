import NavbarElements from "./NavbarElements";
import About from "./Pages/About"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Login from "./Login"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useState, useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiLogIn } from "react-icons/bi"
import MultipleNavElem from "./MultipleNavElem";

function Navbar(props){
    const auth = firebase.auth()
    const [open, setOpen] = useState(false)

    const [user] = useAuthState(auth);
    function handleOpen(){
        setOpen(prev => !prev)
    }

   return (
       <Router>
        <nav className = "menu">
       <img src = "https://media.discordapp.net/attachments/853272906162896927/865604570369359882/c_logo.png?width=406&height=406" width = "80px" height = "80px" />  
       <NavbarElements location ="/chitly/" text = "Home" />
       <NavbarElements location = "/chitly/about" text = "About" />
       <NavbarElements location = "/chitly/posts" text = "Posts" />
       <NavbarElements location = "/communities" text = "Communities" />
       {user ? (<a href = "/chitly/profile"><img referrerPolicy="no-referrer" alt = "pfp" style = {photoStyle} width = "60px" height = "60px" src = {user && user.photoURL} /></a>) : (<a href = "/chitly/register"><BiLogIn  style = {{ cursor : "pointer" }} size = {35} /></a>)}
       </nav>
       </Router>
   )
}

const photoStyle = {
    borderRadius : "100%",
    cursor : "pointer"
}

export default Navbar;