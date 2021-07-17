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

function Navbar(props){
    const auth = firebase.auth()

    const [user] = useAuthState(auth);
   return (
       <Router>
        <nav className = "menu">
       <img src = "https://media.discordapp.net/attachments/853272906162896927/865604570369359882/c_logo.png?width=406&height=406" width = "80px" height = "80px" />  
       <NavbarElements location ="/" text = "Home" />
       <NavbarElements location = "/about" text = "About" />
       <NavbarElements location = "/posts" text = "Posts" />
       <NavbarElements location = "/communities" text = "Communities" />
       {user ? (<a href = "/profile"><img referrerPolicy="no-referrer" alt = "pfp" style = {photoStyle} width = "60px" height = "60px" src = {user && user.photoURL} /></a>) : (<a href = "/register"><BiLogIn  style = {{ cursor : "pointer" }} size = {35} /></a>)}
       </nav>
       </Router>
   )
}

const photoStyle = {
    borderRadius : "100%",
    cursor : "pointer"
}

export default Navbar;