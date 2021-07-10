import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import Information from "./Information"

function Dashboard(props){
    const auth = firebase.auth()

    const logout = async() =>{
        try {
      await auth.signOut()
    } catch(err) {
        console.error(err)
    }
 }

    return (
        <div>
        <br />
        <Information />
        <button style = {logoutButtonStyle} onClick = {logout}>Log out</button>
        </div>
    )
}

const logoutButtonStyle = {
    marginTop : "10px",
    backgroundColor : "red"
}

export default Dashboard