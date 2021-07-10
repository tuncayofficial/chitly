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

function Navbar(props){
    const auth = firebase.auth()

    const [user] = useAuthState(auth);
   return (
       <Router>
        <nav className = "menu">  
       <img alt = "pfp" src = "https://cdn.discordapp.com/attachments/861315062094102559/862771329933901884/162568802009826742.png" width = "70px" height = "70px" />
       <NavbarElements location ="/" text = "Home" />
       <NavbarElements location = "/about" text = "About" />
       <NavbarElements location = "/posts" text = "Posts" />
       <NavbarElements location = "/community" text = "Communities" />
       {user ? (<a href = "/profile"><img alt = "pfp" style = {photoStyle} width = "60px" height = "60px" src = {user.photoURL} /></a>) : (<Login />)}
       </nav>
       </Router>
   )
}

const photoStyle = {
    borderRadius : "100%",
    cursor : "pointer"
}

export default Navbar;