import './App.css';
import Dashboard from "./components/Dashboard/Dashboard"
import Landing from './components/Pages/Landing'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import About from "./components/Pages/About"
import Navbar from './components/Navbar'
import axios from "axios"
import auth from "./tools/firebase"
import { useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import Communities from "./components/Pages/Communities"
import AuthProvider from "./components/context/AuthContext"

function App() {
const [user] = useAuthState(auth)
let isAuth = localStorage.getItem("logged")

// eslint-disable-next-line react-hooks/exhaustive-deps
const sendUser = async() => {
  const url = "http://localhost:8080/sendUser"
 axios.post(url, user)
}

useEffect(() => {
sendUser()
}, [sendUser])

  
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <Switch>
        <AuthProvider>
        <Route exact path = "/" render = {Landing} />
        <Route exact path = "/about" render = {About} />
        <Route exact path = "/communities" render = {Communities} />
        {isAuth ?  (<Route exact path = "/profile" render = {Dashboard} />) : ""}
        </AuthProvider>
        </Switch>
       </div>
    </Router>
  );
}

export default App;