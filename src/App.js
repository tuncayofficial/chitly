import './App.css';

// Components
import Dashboard from "./components/Dashboard/Dashboard"
import Landing from './components/Pages/Landing'
import About from "./components/Pages/About"
import Navbar from './components/Navbar'
import Communities from "./components/Pages/Communities"
import SpecificCommunity from './components/Pages/SpecificCommunity';
import Footer from "./components/Footer"
import Register from "./components/Pages/Register"
import LoginPage from './components/Pages/LoginPage';
import Chat from './components/Pages/Chat'
import News from './components/alerts/News'

// Contexts
import AuthProvider from "./components/context/AuthContext"

// Modules
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from "axios"
import auth from "./tools/firebase"
import { useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
const user = auth.currentUser
let isAuth = localStorage.getItem("logged")

const sendUser = async() => {
  const url = "http://localhost:8080/sendUser"
  axios.post(url, user && user)
}

useEffect(() => {
sendUser()
}, [])

  
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <News />
      <Switch>
        <AuthProvider>
        <Route exact path = "/" component = {Landing} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/communities" component = {Communities} />
        <Route exact path = "/profile" component = {Dashboard} />
        <Route path = "/community/:communityId" component = {SpecificCommunity} />
        <Route exact path = "/register" component = {Register} />
        <Route exact path = "/login" component = {LoginPage} />
        <Route exact path = "/chat" component = {Chat} />
        </AuthProvider>
        </Switch>
       </div>
    </Router>
  );
}

export default App;