import './App.css';
import Dashboard from "./components/Dashboard/Dashboard"
import Landing from './components/Pages/Landing'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import About from "./components/Pages/About"
import Navbar from './components/Navbar'
import axios from "axios"
import auth from "./tools/firebase"
import { useState, useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {


const [user] = useAuthState(auth)

// eslint-disable-next-line react-hooks/exhaustive-deps
const sendUser = async() => {
  const url = "http://localhost:8080/sendUser"
  const options = {
    user
  }
  await axios.post(url, user)
  .then(res => console.log(res.data))
}

useEffect(() => {
sendUser()
}, [sendUser])

  
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <Switch>
        <Route exact path = "/" render = {Landing} />
        <Route exact path = "/about" render = {About} />
        <Route exact path = "/profile" render = {Dashboard} />
        </Switch>
       </div>
    </Router>
  );
}

export default App;