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
    return (
        <Information />
    )
}

export default Dashboard